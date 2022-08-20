package com.omealjomeal.dao;

import com.omealjomeal.dto.CartDTO;
import com.omealjomeal.dto.ProductDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository("cartDAO")
public class CartDAO {

    @Autowired
    SqlSession sqlSession;

    public int cartInsert(CartDTO cartDTO) throws Exception {
        return sqlSession.insert("com.config.CartMapper.cartInsert",cartDTO);
    }

    public int cartProductInsert(int product_id) throws Exception {
        return sqlSession.insert("com.config.CartMapper.cartProductInsert",product_id);
    }

}
