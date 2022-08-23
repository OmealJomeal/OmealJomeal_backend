package com.omealjomeal.controller;

import com.omealjomeal.dto.*;
import com.omealjomeal.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpSession;
import java.io.File;
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
        }

        return feedNum;
    }
    //피드 자세히보기 feed_id값으로 feed 정보 & product 배열 두개 받아서 hashmap저장.
    @GetMapping("/api/feedDetail/{feed_id}")
    public Map<Object,Object> feedDetail(@PathVariable int feed_id) throws Exception{
        //feed_id에 해당하는 feedDTO 정보 가져오기
        Map<Object,Object> feedDetail = feedService.feedDetail(feed_id);
        Map<Object,Object> feedDetailMap = new HashMap<>();

        //feed_id에 해당하는 product_id 로 product 정보 가져오기.
        List<ProductDTO> feedDetailProductList = feedService.feedDetailProductList(feed_id);
        feedDetailMap.put("feedDetail", feedDetail);
        feedDetailMap.put("feedDetailProductList", feedDetailProductList);
        return feedDetailMap;
    }
    //피드 목록 보기. 실시간 컬리식탁!! 피드만보이게
    @GetMapping("/api/feed")
    public List<Map<Object,Object>> selectFeedList() throws Exception{
        List<Map<Object,Object>> map = feedService.feedView();
        return map;
    }

    //피드목록 보기 메인 알고리즘 적용 맞춤취향 거리가 8이하인 유저의 피드를 불러옴.
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
                if(mapKey.equals("user_id")){
                    user_id= Integer.parseInt(String.valueOf(referenceMember.get(mapKey)));
                }else {
                    int referenceCurrent = Integer.parseInt(String.valueOf(CurrentMemberViewMap.get(mapKey)));
                    int referenceOther = Integer.parseInt(String.valueOf(referenceMember.get(mapKey)));
                  sum += Math.pow((int) (referenceOther-referenceCurrent),2);
//                    System.out.println(Integer.parseInt(String.valueOf(referenceMember.get(mapKey)))+"_"+mapKey+"_"+ referenceCurrent+"_"+referenceOther+"_"+sum);
                }
            }
            key.put(user_id,sum);
            sum=0;
        }
        List<Map<Object,Object>> mapSave = new ArrayList<>();
        Object[] lists= key.values().toArray();
        Arrays.sort(lists);
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
        if (mapSave.size() >= 8) {
        for (int j = 0; j <8 ; j++) {
            mapRealResult.add(mapSave.get(j));
        }}
        return mapRealResult;
    }

    //피드목록 보기 메인 알고리즘 적용 반대취향 거리가 8이상인 유저의 피드를 불러옴.
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
                if(mapKey.equals("user_id")){
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
        if (mapSave.size() >= 8) {
            for (int j = 0; j < 8; j++) {
                //8개의 데이터만 저장.
                mapRealResult.add(mapSave.get(j));
            }
        }
        return mapRealResult;
    }

    //피드목록 보기 베스트4 좋아요 갯수로 판정. //매일 일주일 동안 좋아요 갯수가 가장 많은 기준으로 변경?
    @GetMapping("/api/bestFeed")
    public List<Map<Object,Object>> selectBestFeedList() throws Exception{
        List<Map<Object,Object>> map = feedService.feedViewTop();
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

    //좋아요 눌렀던 피드인지 아닌지 확인 후 피드 좋아요 추가 or alert
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

    //피드 삭제
    @DeleteMapping("/api/feed/{feed_id}")
    public String feedDelete(HttpSession session,@PathVariable int feed_id) throws Exception{
        String mesg=null;
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        Map<Object,Object> feedDetail = feedService.feedDetail(feed_id);
        int feed_user_id = Integer.parseInt(String.valueOf(feedDetail.get("user_id")));
        int session_user_id = memberDTO.getUser_id();
        if(feed_user_id == session_user_id){
            //피드 쓴 작성자 아이디랑 현재 로그인 한 아이디 확인해서 같으면 삭제 실행.
            int feedDelete = feedService.feedDelete(feed_id);
            //삭제성공하면 1
            if(feedDelete == 1){
                mesg="제거완료";
            }else{
                //삭제 성공 못하면
                mesg="제거실패";
            }
        }else{
            //피드아이디랑 현재 로그인 한 아이디가 다르면
            mesg="자신이 쓴 글만 삭제 할 수 있습니다.";
        }

        return mesg;
    }
}
