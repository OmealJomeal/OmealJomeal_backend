package com.omealjomeal.service;

import com.omealjomeal.dto.ProductDTO;
import java.util.List;

public interface ProductService {

    //글쓰기
    public int insert(ProductDTO productDTO) throws Exception;
    public List<ProductDTO> selectProductList() throws Exception;
    public ProductDTO selectProductDetail(String product_id) throws Exception;
    public int selectProductID(ProductDTO productDTO) throws Exception;

}
