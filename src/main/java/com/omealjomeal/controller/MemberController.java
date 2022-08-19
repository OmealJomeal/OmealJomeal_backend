package com.omealjomeal.controller;


import com.omealjomeal.dto.LifestyleDTO;
import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.service.LifestyleService;
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

    @Autowired
    LifestyleService lifestyleService;

    @PostMapping("/api/login")
    public MemberDTO login(HttpSession session, @RequestBody HashMap<String, Object> map) throws Exception {
        System.out.println(map);
        MemberDTO memberDTO = memberService.selectMember(map);
        session.setAttribute("login", memberDTO);
        return memberDTO;
    }
    // 로그인 세션 불러오기
    @GetMapping("/api/loginSession")
    public MemberDTO loginSession(HttpSession session) throws Exception {
        return (MemberDTO) session.getAttribute("login");
    }

    // 로그아웃
    @GetMapping("/api/logout")
    public boolean logout(HttpSession session) throws Exception {
        session.invalidate();
        return true;
    }

    // 아이디 중복 체크
    @PostMapping("/api/checkEmail")
    public int checkEmail(@RequestBody HashMap<String, Object> map) throws Exception {
        String email = (String) map.get("email");
        return memberService.checkId(email);
    }

    // 회원가입 처리
    @PostMapping("/api/user")
    public int insertGeneral(@RequestBody HashMap<String, Object> map) throws Exception {

        System.out.println(map);
        HashMap<String, Integer> LifeStyleMap = (HashMap<String, Integer>) map.get("lifestyle");
        HashMap<String, Integer> interestMap = (HashMap<String, Integer>) map.get("interest");
        HashMap<String, Integer> foodFavorMap = (HashMap<String, Integer>) map.get("food_favor");

        int lifestyle_ID = lifestyleService.findLifestyle(LifeStyleMap);
        int interest_ID = lifestyleService.findInterest(interestMap);
        int food_favor_ID = lifestyleService.findFoodFavor(foodFavorMap);
        map.put("user_lifestyle",lifestyle_ID);
        map.put("user_interest",interest_ID);
        map.put("user_food_favor",food_favor_ID);

        return memberService.generalSignUp(map);
    }

    // 일반회원 정보 수정
    @PutMapping("/api/User")
    public int UserEdit(HttpSession session, @RequestBody HashMap<String, Object> map) throws Exception {

        MemberDTO mDTO = (MemberDTO) session.getAttribute("login");
        //user에서 누구꺼의 추천요소들을 바꿀건지 알기위해서.
        map.put("user_id",mDTO.getUser_Id());

        HashMap<String, Integer> LifeStyleMap = (HashMap<String, Integer>) map.get("lifestyle");
        HashMap<String, Integer> interestMap = (HashMap<String, Integer>) map.get("interest");
        HashMap<String, Integer> foodFavorMap = (HashMap<String, Integer>) map.get("food_favor");

        int lifestyle_ID = lifestyleService.findLifestyle(LifeStyleMap);
        int interest_ID = lifestyleService.findInterest(interestMap);
        int food_favor_ID = lifestyleService.findFoodFavor(foodFavorMap);
        //새로 받아온 요소들을 기존의 세션값에 업데이트를 시켜줘야하고, user테이블에 새로 업데이트시켜줘야한다.
        mDTO.setUser_lifestyle(lifestyle_ID);
        mDTO.setUser_lifestyle(lifestyle_ID);
        mDTO.setUser_lifestyle(lifestyle_ID);
//        session.setAttribute("login", memberDTO);
//        return memberService.UserEdit(memberDTO);
        return 0;
    }



}
