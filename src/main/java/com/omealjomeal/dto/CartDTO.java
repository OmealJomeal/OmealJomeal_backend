package com.omealjomeal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Alias("CartDTO")
public class CartDTO {

    int cart_id;
    int total_price;
    int user_id;


}
