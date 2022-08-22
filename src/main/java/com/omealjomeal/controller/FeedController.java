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
import java.util.*;

@RequiredArgsConstructor
@RestController
public class FeedController {

    @Value("${spring.servlet.multipart.location}")
    private String uploadPath;

    //생성자 주입.
    private final MemberService memberService;

    private final FeedService feedService;

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

        feedImg.transferTo(new File(uploadPath +"feed",  feed_id + "_"+"FeedImg"+ ".png"));

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
    //피드 자세히보기 feed_id값으로 feed 정보 & product 배열 두개 받아서 hashmap저장.
    @GetMapping("/api/feedDetail/{feed_id}")
    public Map<Object,Object> feedDetail(@PathVariable int feed_id) throws Exception{
        //feed_id에 해당하는 feedDTO 정보 가져오기
        FeedDTO feedDetail = feedService.feedDetail(feed_id);
        Map<Object,Object> feedDetailMap = new HashMap<>();

        //feed_id에 해당하는 product_id 로 product 정보 가져오기.
        List<ProductDTO> feedDetailProductList = feedService.feedDetailProductList(feed_id);
        feedDetailMap.put("feedDetail", feedDetail);
        feedDetailMap.put("feedDetailProductList", feedDetailProductList);
        System.out.println(feedDetailMap);
        return feedDetailMap;
    }
    //피드 목록 보기.   실시간 컬리식탁!! 피드만보이게
    @GetMapping("/api/feed")
    public List<Map<Object,Object>> selectFeedList(HttpSession session) throws Exception{
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        //피드 & feedProduct & product 조인해서 불러오기.
        List<Map<Object,Object>> map = feedService.feedView();
        System.out.println(map);
        return map;
    }

    //피드목록 보기 메인 알고리즘 적용 맞춤취향
    @GetMapping("/api/mainFeedFit")
    public List<Map<Object,Object>> selectMainFeedList(HttpSession session) throws Exception{
        int sum=0;
        int user_id=0;

        HashMap<Integer,Integer> key = new HashMap<>();
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        int currentUserId = memberDTO.getUser_id();
        Map<String,Integer> CurrentMemberViewMap = memberService.currentMemberView(currentUserId);
        //membertable조회
        // lifestyle, interest, food_favor 조인해서 조회.
        List<HashMap<String,Integer>> memberViewMap = memberService.memberView(currentUserId);

        for (HashMap<String,Integer> referenceMember:memberViewMap) {
            for(String mapKey: referenceMember.keySet()){
                if(Integer.parseInt(String.valueOf(referenceMember.get(mapKey))) >= 2){
                    user_id= Integer.parseInt(String.valueOf(referenceMember.get(mapKey)));
                }else {
                    int referenceCurrent = Integer.parseInt(String.valueOf(CurrentMemberViewMap.get(mapKey)));
                    int referenceOther = Integer.parseInt(String.valueOf(referenceMember.get(mapKey)));
                  sum += Math.pow((int) (referenceOther-referenceCurrent),2);
                }
            }
            key.put(user_id,sum);
            sum=0;
        }
        //{21:10, 3:7, 5:7,...}
        List<Map<Object,Object>> mapSave = new ArrayList<>();
        int i = 0;
        Object[] lists= key.values().toArray();
        Arrays.sort(lists);//(7, 10)
        List<Map<Object,Object>> mapRealResult = new ArrayList<>();
        for (int userID : key.keySet()) {
            Integer value = key.get(userID);
            if (value <= 8) {
                List<Map<Object, Object>> map = feedService.feedViewMainFit(userID);
                for (Map<Object, Object> mapSSSS : map) {
                    mapSave.add(mapSSSS);
                }
            }
        }
                //랜덤으로 mapSave불러와서 8개만 따로저장해서 반환.
                Collections.shuffle(mapSave);
        if (mapSave.size() != 0) {
        for (int j = 0; j <8 ; j++) {
            mapRealResult.add(mapSave.get(j));
        }}else{
                mapRealResult = null;
            }
        return mapRealResult;
    }

    //피드목록 보기 메인 알고리즘 적용 반대취향
    @GetMapping("/api/mainFeedNotFit")
    public List<Map<Object,Object>> selectMainNotFeedList(HttpSession session) throws Exception{
        int sum=0;
        int user_id=0;

        HashMap<Integer,Integer> key = new HashMap<>();
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        int currentUserId = memberDTO.getUser_id();
        Map<String,Integer> CurrentMemberViewMap = memberService.currentMemberView(currentUserId);
        //membertable조회
        // lifestyle, interest, food_favor 조인해서 조회.
        List<HashMap<String,Integer>> memberViewMap = memberService.memberView(currentUserId);

        // 추천 알고리즘
        for (HashMap<String,Integer> referenceMember:memberViewMap) {
            for(String mapKey: referenceMember.keySet()){
                if(Integer.parseInt(String.valueOf(referenceMember.get(mapKey))) >= 2){
                    user_id= Integer.parseInt(String.valueOf(referenceMember.get(mapKey)));
                }else {
                    int referenceCurrent = Integer.parseInt(String.valueOf(CurrentMemberViewMap.get(mapKey)));
                    int referenceOther = Integer.parseInt(String.valueOf(referenceMember.get(mapKey)));
                    sum += Math.pow((int) (referenceOther-referenceCurrent),2);
                }
            }
            key.put(user_id,sum);
            sum=0;
        }
        List<Map<Object,Object>> mapSave = new ArrayList<>();
        int i = 0;
        Object[] lists= key.values().toArray();
        Arrays.sort(lists,Collections.reverseOrder());//(7, 10)
        List<Map<Object,Object>> mapRealResult = new ArrayList<>();
        for (int userID : key.keySet()) {
            Integer value = key.get(userID);
            if (value >= 8) {
                List<Map<Object, Object>> map = feedService.feedViewMainFit(userID);
                for (Map<Object, Object> mapSSSS : map) {
                    mapSave.add(mapSSSS);
                }
            }
        }
        //랜덤으로 mapSave불러와서 랜덤으로 섞어주고
        Collections.shuffle(mapSave);
        if (mapSave.size() != 0) {
            for (int j = 0; j < 8; j++) {
                //8개의 데이터만 저장.
                mapRealResult.add(mapSave.get(j));
            }
        }else{
            mapRealResult = null;
        }
        return mapRealResult;
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
    //피드 좋아요 추가
    @PostMapping("/api/feedLikes")
    public int feedLikes(HttpSession session,@RequestBody FeedLikesDTO feedLikesDTO) throws Exception{
        //feedLikesDTO = FEEDLIKES_ID, FEED_ID, USER_ID, LIKES_CATEGORY
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        int currentUserId = memberDTO.getUser_id();
        feedLikesDTO.setUser_id(currentUserId);
        int feedLikes = feedService.feedLikesInsert(feedLikesDTO);
        return feedLikes;
    }
    @GetMapping("/api/feedLikes/{feed_id}")
    public FeedLikesDTO checkFeedLikes(HttpSession session,@PathVariable int feed_id) throws Exception{
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        int currentUserId = memberDTO.getUser_id();
        FeedLikesDTO feedLikesDTO = new FeedLikesDTO();
        feedLikesDTO.setFeed_id(feed_id);
        feedLikesDTO.setUser_id(currentUserId);

        FeedLikesDTO result = feedService.checkFeedLikes(feedLikesDTO);
        return result;

    }

    //좋아요 누름 -> 유저가 좋아요 누른적 있는지 없는지 확인 후 -> 없으면 포스트
}
