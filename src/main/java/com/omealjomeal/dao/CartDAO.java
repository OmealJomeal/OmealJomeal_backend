package com.omealjomeal.dao;

import com.omealjomeal.dto.CartDTO;
import com.omealjomeal.dto.ProductDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository("cartDAO")
public class CartDAO {

    @Autowired
    SqlSession sqlSession;

    public int cartInsert(HashMap<String, Integer> cartMap) throws Exception {
        return sqlSession.insert("com.config.CartMapper.cartInsert",cartMap);
    }

    public int cartProductInsert(int product_id) throws Exception {
        return sqlSession.insert("com.config.CartMapper.cartProductInsert",product_id);
    }

    public List<Map<String,String>> cartView(int user_id) throws Exception {
        return sqlSession.selectList("com.config.CartMapper.cartView",user_id);
    }
}
