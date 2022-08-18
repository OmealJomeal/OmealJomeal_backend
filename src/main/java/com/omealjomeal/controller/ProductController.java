package com.omealjomeal.controller;

import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
import com.omealjomeal.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    // 글 등록
    @PostMapping("/api/product/write")
    public int postWritePro(@RequestBody ProductDTO pDto, HttpSession session)
            throws Exception {
        MemberDTO mDto = (MemberDTO) session.getAttribute("login");

        return productService.insert(pDto);
    }


}
