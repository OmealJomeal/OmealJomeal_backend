package com.omealjomeal.dao;

import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Repository("cartDAO")
public class CartDAO {

    private final SqlSession sqlSession;

    public int cartInsert(HashMap<String, Integer> cartMap) throws Exception {
        return sqlSession.insert("com.config.CartMapper.cartInsert",cartMap);
    }

    public int cartProductInsert(int product_id) throws Exception {
        return sqlSession.insert("com.config.CartMapper.cartProductInsert",product_id);
    }

    public List<Map<String,Object>> cartView(int user_id) throws Exception {
        return sqlSession.selectList("com.config.CartMapper.cartView",user_id);
    }

    public int cartViewCheck(HashMap<String, Integer> map) throws Exception {
        return sqlSession.selectOne("com.config.CartMapper.cartViewCheck",map);
    }

    public int cartDelete(int cart_id) throws Exception {
        return sqlSession.delete("com.config.CartMapper.cartDelete",cart_id);
    }
}
