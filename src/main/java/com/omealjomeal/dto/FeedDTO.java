package com.omealjomeal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Alias("FeedDTO")
public class FeedDTO {

    String feed_Id;
    String feed_title;
    String feed_image;
    String feed_description;
    String feed_recipe;
    String feed_cooktime;
    String feed_cooklevel;
    String feed_time;
    String feed_food_time;

    //참조키
    String feed_lifestyle;
    String feed_interest;
    String feed_food_favor;
    String user_Id;


}
