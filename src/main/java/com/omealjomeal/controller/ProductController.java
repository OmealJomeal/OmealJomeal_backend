package com.omealjomeal.controller;

import com.omealjomeal.dto.CartDTO;
import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
import com.omealjomeal.service.CartService;
import com.omealjomeal.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.lang.reflect.Member;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

@RestController
public class ProductController {

    HttpSession session;
    @Autowired
    ProductService productService;
    @Autowired
    CartService cartService;

    @Value("${spring.servlet.multipart.location}")
    private String uploadPath;

    // 상품 등록
    @PostMapping("/api/product")
    public int productWrite(@RequestParam("multipartFile") MultipartFile multipartFile, @RequestBody HashMap<String, Object> map)
            throws Exception {
        System.out.println(multipartFile);
        System.out.println(map);
        MemberDTO mDto = (MemberDTO) session.getAttribute("login");
        int user_id = mDto.getUser_id();
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
    @PostMapping("/api/cart")
    public int productCart(@RequestBody ProductDTO productDTO) throws Exception{
        // productDTO에는 product_price, product_amount, product_id
        int total_price = (int) productDTO.getProduct_amount() * (int) productDTO.getProduct_price();
        MemberDTO mDTO = (MemberDTO) session.getAttribute("login");
        int user_id = mDTO.getUser_id();
        CartDTO cDTO = new CartDTO();
        cDTO.setTotal_price(total_price);
        cDTO.setUser_id(user_id);
        int cartCnt = cartService.cartInsert(cDTO);
        int CartProductCnt = cartService.cartProductInsert(productDTO.getProduct_id());
        return cartCnt;
    }

    //장바구니 조회
//    @GetMapping("/api/cart")
//    public HashMap<String, Object> Cart() throws Exception {
//        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
//
//        HashMap<String, Object> map = cartService.cartView(memberDTO.getUser_id());
//        return map;
//    }

    //상품 검색도 만들어야함.


}
