package com.omealjomeal.dao;

import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository("productDAO")
public class ProductDAO {

    @Autowired
    SqlSession sqlSession;

    public int insert(ProductDTO productDTO) throws Exception {
        return sqlSession.insert("com.config.ProductMapper.insert", productDTO);
    }

    public List<ProductDTO> selectProductList() throws Exception {
        return sqlSession.selectList("com.config.ProductMapper.selectProductList");
    }

    public ProductDTO selectProductDetail(String product_id) throws Exception {
        return sqlSession.selectOne("com.config.ProductMapper.selectProductDetail",product_id);
    }

    public int selectProductID(ProductDTO productDTO) throws Exception {
        return sqlSession.selectOne("com.config.ProductMapper.selectProductID",productDTO);
    }



}
