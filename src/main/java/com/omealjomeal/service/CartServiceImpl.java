package com.omealjomeal.service;

import com.omealjomeal.dao.CartDAO;
import com.omealjomeal.dao.ProductDAO;
import com.omealjomeal.dto.CartDTO;
import com.omealjomeal.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service("cartService")
public class CartServiceImpl implements CartService{

    @Autowired
    CartDAO dao;

    @Override
    public int cartInsert(CartDTO cartDTO) throws Exception {
        return dao.cartInsert(cartDTO);
    }

    @Override
    public int cartProductInsert(int product_id) throws Exception {
        return dao.cartProductInsert(product_id);
    }

}
