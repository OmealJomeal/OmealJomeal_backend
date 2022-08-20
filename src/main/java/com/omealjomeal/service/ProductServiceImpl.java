package com.omealjomeal.service;

import com.omealjomeal.dao.MemberDAO;
import com.omealjomeal.dao.ProductDAO;
import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service("productService")
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductDAO dao;

    @Override
    public int insert(ProductDTO productDTO) throws Exception {
        return dao.insert(productDTO);
    }

    @Override
    public List<ProductDTO> selectProductList() throws Exception {
        return dao.selectProductList();
    }

    @Override
    public ProductDTO selectProductDetail(String product_id) throws Exception {
        return dao.selectProductDetail(product_id);
    }

    @Override
    public int selectProductID(ProductDTO productDTO) throws Exception {
        return dao.selectProductID(productDTO);
    }
}
