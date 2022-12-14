package com.omealjomeal.controller;

import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
import com.omealjomeal.service.CartService;
import com.omealjomeal.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@RequiredArgsConstructor
@RestController
public class ProductController {

    private final ProductService productService;
    private final CartService cartService;

    @Value("${spring.servlet.multipart.location}")
    private String uploadPath;

    // 상품 등록.
    @PostMapping("/api/product")
    public int productImg(@RequestPart("product_img") MultipartFile files,
                            @RequestPart("product_clear_img") MultipartFile clear_img,
                            @RequestParam("product_name") String product_name,
                            @RequestParam("product_price") String product_pric,
                            @RequestParam("product_description") String product_description,
                            @RequestParam("product_category") String product_category
                            )
            throws Exception {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setProduct_name(product_name);
        int product_price = Integer.parseInt(product_pric);
        productDTO.setProduct_price(product_price);
        productDTO.setProduct_description(product_description);
        productDTO.setProduct_category(product_category);

        int n = productService.insert(productDTO);
        int product_id = productService.selectProductID(productDTO);

        //트랜잭션 고민.
        files.transferTo(new File(uploadPath + "product",  product_id + "_"+"noneClear"+ ".png"));
        clear_img.transferTo(new File(uploadPath +"product",  product_id + "_"+"clearImg"+ ".png"));

        return n;
    }

    //상품 자세히보기
    @GetMapping("/api/productdetail/{product_id}")
    public ProductDTO productDetail(@PathVariable String product_id) throws Exception {
        ProductDTO productDTO = productService.selectProductDetail(product_id);
        return productDTO;
    }

    //상품 리스트 보기
    @GetMapping("/api/product")
    public List<ProductDTO> productList() throws Exception {
        List<ProductDTO> productList = productService.selectProductList();
        return productList;
    }

    // 장바구니추가
    @PostMapping("/api/cart")
    public int productCart(HttpSession session,@RequestBody HashMap<String,Integer> map) throws Exception{
        // productDTO에는 product_price, product_amount, product_id
        int total_price = map.get("product_amount") * map.get("product_price");
        MemberDTO mDTO = (MemberDTO) session.getAttribute("login");
        int user_id = mDTO.getUser_id();
        map.put("total_price",total_price);
        map.put("user_id",user_id);
        int cartCnt=0;
        int cart_id = cartService.cartViewCheck(map);
        if (cart_id==0) {
            //트랜잭션 고려
            cartCnt = cartService.cartInsert(map);
        }
        return cartCnt;
    }

    //장바구니 조회
    @GetMapping("/api/cart")
    public List<Map<String,Object>> Cart(HttpSession session) throws Exception {
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("login");
        List<Map<String,Object>> map = cartService.cartView(memberDTO.getUser_id());
        return map;
    }

    //장바구니 삭제
    @DeleteMapping("/api/cart/{cart_id}")
    public int cartDelete(@PathVariable int cart_id) throws Exception {
        int cartDelete = cartService.cartDelete(cart_id);
        return cartDelete;
    }

}
