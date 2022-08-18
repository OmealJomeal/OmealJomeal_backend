package com.omealjomeal.dao;

import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Repository("productDAO")
public class ProductDAO {

    @Autowired
    SqlSession sqlSession;

    public int insert(ProductDTO dto) throws Exception {
        return sqlSession.insert("com.config.ProductMapper.insert", dto);
    }
}
