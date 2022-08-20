package com.omealjomeal.service;

import com.omealjomeal.dto.CartDTO;
import com.omealjomeal.dto.ProductDTO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface CartService {

    //글쓰기
    public int cartInsert(CartDTO cartDTO) throws Exception;
    public int cartProductInsert(int product_id) throws Exception;
    public List<Map<String,String>> cartView(int user_id) throws Exception;


}
