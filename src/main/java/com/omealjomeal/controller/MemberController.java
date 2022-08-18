package com.omealjomeal.controller;

import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.lang.reflect.Member;
import java.util.HashMap;
import java.util.Map;

@RestController
public class MemberController {

    @Autowired
    MemberService memberService;

    @GetMapping("/api/hello")
    public String test(){
        return "Hello, world!";
    }

    @PostMapping("/api/login")
    public MemberDTO login(HttpSession session, @RequestBody HashMap<String, Object> map) throws Exception {
        System.out.println(map);
        MemberDTO memberDTO = memberService.selectMember(map);
        session.setAttribute("login", memberDTO);
        return memberDTO;
    }

    // 로그아웃
    @GetMapping("/api/logout")
    public boolean logout(HttpSession session) throws Exception {
        session.invalidate();
        return true;
    }

    // 일반회원가입 처리
//    @PostMapping("/api/generalSignUp")
//    public int insertGeneral(MemberDTO memberDTO) throws Exception {
//        return memberService.generalSignUp(memberDTO);
//    }

}
