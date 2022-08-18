package com.omealjomeal.service;

import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;

import java.util.HashMap;

public interface ProductService {

    //글쓰기
    public int insert(ProductDTO dto) throws Exception;

}
