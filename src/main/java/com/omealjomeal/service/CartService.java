package com.omealjomeal.service;

import com.omealjomeal.dto.CartDTO;
import com.omealjomeal.dto.ProductDTO;

import java.util.HashMap;
import java.util.List;

public interface CartService {

    //글쓰기
    public int cartInsert(CartDTO cartDTO) throws Exception;
    public int cartProductInsert(int product_id) throws Exception;


}
