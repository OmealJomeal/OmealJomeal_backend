package com.omealjomeal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Alias("FoodFavorDTO")
public class FoodFavorDTO {

    int food_favor_id;
    int sweetness;
    int bitter;
    int sour_taste;
    int salty;
    int spicy;

}
