package com.omealjomeal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Alias("ProductDTO")
public class ProductDTO {

    int product_id;
    String product_name;
    int product_price;
    String product_description;
    String product_category;
    String product_img;
    String product_clear_img;
    String product_time;
    int product_amount;

    int user_id;
}
