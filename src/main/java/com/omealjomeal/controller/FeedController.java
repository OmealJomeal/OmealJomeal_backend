package com.omealjomeal.controller;

import com.omealjomeal.dto.*;
import com.omealjomeal.service.CartService;
import com.omealjomeal.service.FeedService;
import com.omealjomeal.service.LifestyleService;
import com.omealjomeal.service.ProductService;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.lang.reflect.Member;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class FeedController {

    @Value("${spring.servlet.multipart.location}")
    private String uploadPath;

    @Autowired
    LifestyleService lifestyleService;

    @Autowired
    FeedService feedService;

    //feed 업로드
    @PostMapping("/api/feed")
    public int feedUpload(@RequestPart("feed_img") MultipartFile feedImg,
                          @RequestParam("feed_title") String feed_title,
                          @RequestParam("feed_description") String feed_description,
                          @RequestParam("feed_recipe") String feed_recipe,
                          @RequestParam("feed_cooktime") String feed_cooktime,
                          @RequestParam("feed_cooklevel") String feed_cooklevel,
                          @RequestParam("feed_food_time") String feed_food_time,
                          @RequestParam("product_id") HashMap<String,Integer> product_id,
                          @RequestParam("feed_lifestyle") HashMap<String,Integer> feed_lifestyle,
                          @RequestParam("feed_interest") HashMap<String, Integer> feed_interest,
                          @RequestParam("feed_food_favor") HashMap<String,Integer> feed_food_favor,
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

        int lifestyle_ID = lifestyleService.findLifestyle(feed_lifestyle);
        int interest_ID = lifestyleService.findInterest(feed_interest);
        int food_favor_ID = lifestyleService.findFoodFavor(feed_food_favor);

        feedDTO.setFeed_lifestyle(lifestyle_ID);
        feedDTO.setFeed_interest(interest_ID);
        feedDTO.setFeed_food_favor(food_favor_ID);

        int feedNum = feedService.feedUpload(feedDTO);
        int feed_id = feedService.selectFeedId(feedDTO);
        feedImg.transferTo(new File(uploadPath,  feed_id + "_"+"ClearImg"+ ".png"));
        //feedProduct에 인서트..!
        FeedProductDTO feedProductDTO = new FeedProductDTO();
        feedProductDTO.setFeed_id(feed_id);
        product_id.forEach((strKey, intValue)->{
            feedProductDTO.setProduct_id(intValue);
            try {
                int feedProduct = feedService.feedProductUpload(feedProductDTO);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        return feedNum;
    }
    //피드 자세히보기
//    @GetMapping("/api/feedDetail")

    //피드 목록 보기. 여기서 알고리즘 적용
    @GetMapping("/api/feed")
    public List<Map<String,String>> selectFeedList(HttpSession session) throws Exception{
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        //피드 & feedProduct & product 조인해서 불러오기.
        List<Map<String,String>> map = feedService.feedView(memberDTO.getUser_id());

        return map;
    }

}
