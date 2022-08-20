package com.omealjomeal.service;

import com.omealjomeal.dao.CartDAO;
import com.omealjomeal.dao.ProductDAO;
import com.omealjomeal.dto.CartDTO;
import com.omealjomeal.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("cartService")
public class CartServiceImpl implements CartService{

    @Autowired
    CartDAO dao;

    @Override
    public int cartInsert(HashMap<String, Integer> cartMap) throws Exception {
        return dao.cartInsert(cartMap);
    }

    @Override
    public int cartProductInsert(int product_id) throws Exception {
        return dao.cartProductInsert(product_id);
    }

    @Override
    public List<Map<String,String>> cartView(int user_id) throws Exception {
        return dao.cartView(user_id);
    }

}
