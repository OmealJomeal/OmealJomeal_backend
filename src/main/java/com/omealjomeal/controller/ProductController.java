package com.omealjomeal.controller;

import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
import com.omealjomeal.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

@RestController
public class ProductController {

    HttpSession session;
    @Autowired
    ProductService productService;

    @Value("${spring.servlet.multipart.location}")
    private String uploadPath;

    // 상품 등록
    @PostMapping("/api/product")
    public int productWrite(@RequestParam("multipartFile") MultipartFile multipartFile, @RequestBody HashMap<String, Object> map)
            throws Exception {
        System.out.println(multipartFile);
        System.out.println(map);
        MemberDTO mDto = (MemberDTO) session.getAttribute("login");
        int user_id = mDto.getUser_Id();
        String product_name = (String) map.get("product_name");
        Calendar calendar = Calendar.getInstance();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String datetime = simpleDateFormat.format(calendar.getTime());
        multipartFile.transferTo(new File(uploadPath + "product/", user_id + "_"+ product_name + "_" + datetime + ".png"));
        map.put("user_id",user_id);
        int cnt = productService.insert(map);
        return cnt;
    }

    //상품 자세히보기
    @GetMapping("/api/productdetail")
    public ProductDTO productDetail(@RequestParam String product_id) throws Exception {
        ProductDTO productDTO = productService.selectProductDetail(product_id);
        return productDTO;
    }

    //상품 리스트 보기
    @GetMapping("/api/product")
    public List<ProductDTO> productList() throws Exception {
        List<ProductDTO> productList = productService.selectProductList();
        return productList;
    }

    // 상품 구매 ->장바구니
    @PostMapping("/api/productCart")
    public int productCart(@RequestBody HashMap<String, Object> map){
        // map에는 product_price, product_amount, product_id
        // map.get("product_name");

        return 0;
    }

    //상품 검색도 만들어야함.

}
