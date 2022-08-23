package com.omealjomeal.service;

import com.omealjomeal.dao.CartDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service("cartService")
public class CartServiceImpl implements CartService{


    private final CartDAO dao;

    @Transactional
    @Override
    public int cartInsert(HashMap<String, Integer> cartMap) throws Exception {
        return dao.cartInsert(cartMap) & dao.cartProductInsert(cartMap.get("product_id"));
    }


    @Override
    public List<Map<String,Object>> cartView(int user_id) throws Exception {
        return dao.cartView(user_id);
    }

    @Override
    public int cartViewCheck(HashMap<String, Integer> map) throws Exception {
        return dao.cartViewCheck(map);
    }

}
