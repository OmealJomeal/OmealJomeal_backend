package com.omealjomeal.service;

import com.omealjomeal.dao.MemberDAO;
import com.omealjomeal.dao.ProductDAO;
import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

@Service("productService")
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductDAO dao;

    @Override
    public int insert(ProductDTO dto) throws Exception {
        return dao.insert(dto);
    }


}
