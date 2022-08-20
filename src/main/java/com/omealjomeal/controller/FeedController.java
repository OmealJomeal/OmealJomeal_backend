package com.omealjomeal.controller;

import com.omealjomeal.dto.CartDTO;
import com.omealjomeal.dto.FeedDTO;
import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
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
                          @RequestParam("product_id") HashMap<String,Object> product_id,
                          @RequestParam("feed_lifestyle") HashMap<String,Integer> feed_lifestyle,
                          @RequestParam("feed_interest") HashMap<String, Integer> feed_interest,
                          @RequestParam("feed_food_favor") HashMap<String,Integer> feed_food_favor,
                          HttpSession session
    ) throws Exception{
        FeedDTO feedDTO = new FeedDTO();
        feedDTO.setFeed_title(feed_title);
        feedDTO.setFeed_description(feed_description);
        feedDTO.setFeed_recipe(feed_recipe);
        feedDTO.setFeed_cooktime(feed_cooktime);
        feedDTO.setFeed_food_time(feed_food_time);

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

        
        return feedNum;
    }

}
