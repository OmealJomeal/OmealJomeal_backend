package com.omealjomeal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Alias("FeedLikesDTO")
public class FeedLikesDTO {

    int feedLikes_id;
    int feed_id;
    int user_id;
    int likes_category;

}
