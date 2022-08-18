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

    // 아이디 중복 체크
    @PostMapping("/api/checkEmail")
    public int checkEmail(@RequestBody MemberDTO dto) throws Exception {
        return memberService.checkId(dto.getUser_email());
    }

    // 일반회원가입 처리
    @PostMapping("/api/generalSignUp")
    public int insertGeneral(@RequestBody HashMap<String, Object> map) throws Exception {
//        map.get();
//        map.get();
//        map.get();
//        map.get();
//        map.get();
//        map에서 정보 빼서 memberDTO에 set하고, lifestyle,
//        interest, food_Favor값도 Map으로 get해서 select해서
//        lifestyle_id,interest_id,food_favor_id가 몇인지 조회해서 추가시키자.
//        return memberService.generalSignUp(memberDTO);
        return 0;
    }

}
