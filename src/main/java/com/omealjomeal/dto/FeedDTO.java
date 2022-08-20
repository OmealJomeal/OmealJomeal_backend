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

    int feed_id;
    String feed_title;
    String feed_image;
    String feed_description;
    String feed_recipe;
    String feed_cooktime;
    String feed_cooklevel;
    String feed_time;
    String feed_food_time;

    //참조키
    int feed_lifestyle;
    int feed_interest;
    int feed_food_favor;
    int user_id;


}
