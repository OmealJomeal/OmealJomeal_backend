package com.omealjomeal.controller;

import com.omealjomeal.dto.*;
import com.omealjomeal.service.*;
import io.swagger.models.auth.In;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.lang.reflect.Member;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@RequiredArgsConstructor
@RestController
public class FeedController {

    @Value("${spring.servlet.multipart.location}")
    private String uploadPath;

    //생성자 주입.
    private final MemberService memberService;

    private final FeedService feedService;
    private final LifestyleService lifestyleService;

    //requestPram
    //feed 업로드
    @PostMapping("/api/feed")
    public int feedUpload(@RequestPart("feed_img") MultipartFile feedImg,
                          @RequestParam("feed_title") String feed_title,
                          @RequestParam("feed_description") String feed_description,
                          @RequestParam("feed_recipe") String feed_recipe,
                          @RequestParam("feed_cooktime") String feed_cooktime,
                          @RequestParam("feed_cooklevel") String feed_cooklevel,
                          @RequestParam("feed_food_time") String feed_food_time,
                          @RequestParam("product_id") String product_id,
                          HttpSession session
    ) throws Exception{
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        int user_id = memberDTO.getUser_id();
        FeedDTO feedDTO = new FeedDTO();
        feedDTO.setFeed_title(feed_title);
        feedDTO.setFeed_description(feed_description);
        feedDTO.setFeed_recipe(feed_recipe);
        feedDTO.setFeed_cooktime(feed_cooktime);
        feedDTO.setFeed_food_time(feed_food_time);
        feedDTO.setFeed_cooklevel(feed_cooklevel);
        feedDTO.setUser_id(user_id);

        //feed 정보 피드 테이블에 insert
        //feed-id 데이터베이스에서 받아와서 이미지 저장.
        int feedNum = feedService.feedUpload(feedDTO);
        int feed_id = feedService.selectFeedId(feedDTO);
        System.out.println("feed_ID"+feed_id);
        feedImg.transferTo(new File(uploadPath,  feed_id + "_"+"ClearImg"+ ".png"));

        //feedProduct 테이블에 insert..!
        FeedProductDTO feedProductDTO = new FeedProductDTO();
        feedProductDTO.setFeed_id(feed_id);

        //String str = "사과,배,귤_바나나_딸기 수박";
        String[] results = product_id.split(",");
        for (int i=0; i<results.length; i++){
            int id = Integer.parseInt(results[i]);
            feedProductDTO.setProduct_id(id);
            int feedProduct = feedService.feedProductUpload(feedProductDTO);
            System.out.println("feedproduct"+feedProduct);
        }

        return feedNum;
    }
    //피드 자세히보기
//    @GetMapping("/api/feedDetail")

    //피드 목록 보기.   실시간 컬리식탁!! 피드만보이게
    @GetMapping("/api/feed")
    public List<Map<Object,Object>> selectFeedList(HttpSession session) throws Exception{
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        //피드 & feedProduct & product 조인해서 불러오기.
        List<Map<Object,Object>> map = feedService.feedView();
        System.out.println(map);
        //알고리즘적용필요X.
        return map;
    }

    //피드목록 보기 메인 알고리즘 적용 맞춤취향
    @GetMapping("/api/mainFeedFit")
    public List<Map<Integer,Object>> selectMainFeedList(HttpSession session) throws Exception{
        int sum=0;
        int user_id=0;

        HashMap<Integer,Object> key = new HashMap<>();
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        int currentUserId = memberDTO.getUser_id();
        Map<String,Integer> CurrentMemberViewMap = memberService.currentMemberView(currentUserId);
        //membertable조회
        // lifestyle, interest, food_favor 조인해서 조회.
        List<Map<String,Integer>> memberViewMap = memberService.memberView(currentUserId);
        List<Map<Integer,Object>> mapValue = new ArrayList<>();

        for (Map<String,Integer> referenceMember:memberViewMap) {

            for(String mapKey: referenceMember.keySet()){
                if(mapKey == "user_id"){
                    user_id= referenceMember.get("user_id");
                }else {
                  sum += Math.pow(((int)referenceMember.get(mapKey)-(int)CurrentMemberViewMap.get(mapKey)),2);
                    System.out.println(sum);
                }
                key.put(user_id,sum);
                mapValue.add(key);
            }

            System.out.println(mapValue);
        }

        //여기서 알고리즘 적용해서 작성하고 가장 가까운 user_id 순서대로 정렬. int[] user_id로 전달?
        //피드 & feedProduct & product 조인해서 불러오기.
        //[{salty=0, couple=0, gender=0, babycare=0, health=0, sweetness=0, spicy=0, bitter=0, interest_id=1, outdoor=0, lifestyle_id=1, baking=0, livealone=0, FOOD_FAVOR_ID=1, user_id=21, sour_taste=0, homemaker=0, baby=0, cooking=0, worker=0, pet=0, child=0}, {salty=0, couple=0, gender=0, babycare=0, health=0, sweetness=0, spicy=0, bitter=0, interest_id=1, outdoor=0, lifestyle_id=1, baking=0, livealone=0, FOOD_FAVOR_ID=1, user_id=15, sour_taste=0, homemaker=0, baby=0, cooking=0, worker=0, pet=0, child=0}, {salty=0, couple=0, gender=0, babycare=1, health=1, sweetness=0, spicy=0, bitter=1, interest_id=28, outdoor=1, lifestyle_id=14, baking=0, livealone=0, FOOD_FAVOR_ID=13, user_id=22, sour_taste=1, homemaker=1, baby=0, cooking=1, worker=1, pet=0, child=1}, {salty=0, couple=0, gender=0, babycare=1, health=1, sweetness=0, spicy=0, bitter=1, interest_id=28, outdoor=1, lifestyle_id=14, baking=0, livealone=0, FOOD_FAVOR_ID=13, user_id=23, sour_taste=1, homemaker=1, baby=0, cooking=1, worker=1, pet=0, child=1}, {salty=0, couple=0, gender=1, babycare=0, health=0, sweetness=0, spicy=0, bitter=0, interest_id=1, outdoor=0, lifestyle_id=33, baking=0, livealone=0, FOOD_FAVOR_ID=1, user_id=13, sour_taste=0, homemaker=0, baby=0, cooking=0, worker=0, pet=0, child=0}, {salty=0, couple=0, gender=1, babycare=0, health=0, sweetness=1, spicy=0, bitter=0, interest_id=33, outdoor=0, lifestyle_id=49, baking=0, livealone=1, FOOD_FAVOR_ID=17, user_id=14, sour_taste=0, homemaker=0, baby=0, cooking=0, worker=0, pet=1, child=0}, {salty=0, couple=0, gender=0, babycare=1, health=0, sweetness=0, spicy=1, bitter=1, interest_id=18, outdoor=1, lifestyle_id=66, baking=0, livealone=0, FOOD_FAVOR_ID=10, user_id=1, sour_taste=0, homemaker=1, baby=1, cooking=0, worker=0, pet=0, child=0}]

        List<Map<Object,Object>> map = feedService.feedView();
        return mapValue;
    }

    //피드목록 보기 베스트5 알고리즘 적용
    @GetMapping("/api/bestFeed")
    public List<Map<Object,Object>> selectBestFeedList(HttpSession session) throws Exception{
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        //membertable조회

        //피드 & feedProduct & product 조인해서 불러오기.
        List<Map<Object,Object>> map = feedService.feedView();
        //알고리즘적용필요X.
        return map;
    }
}
