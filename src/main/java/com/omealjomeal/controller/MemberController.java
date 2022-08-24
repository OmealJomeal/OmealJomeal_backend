package com.omealjomeal.controller;


import com.omealjomeal.dto.FoodFavorDTO;
import com.omealjomeal.dto.InterestDTO;
import com.omealjomeal.dto.LifestyleDTO;
import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.service.LifestyleService;
import com.omealjomeal.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpSession;
import java.util.HashMap;

@RequiredArgsConstructor
@RestController
public class MemberController {

    private final MemberService memberService;

    private final LifestyleService lifestyleService;

    //로그인
    @PostMapping("/api/login")
    public MemberDTO login(HttpSession session, @RequestBody HashMap<String, Object> map) throws Exception {
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

    //정보수정에 내 정보 보이게.
    @GetMapping("/api/user")
    public HashMap<String, Object> UserEdit(HttpSession session) throws Exception {
        MemberDTO mDTO = (MemberDTO) session.getAttribute("login");
        int lifestyle = mDTO.getUser_lifestyle();
        int interest = mDTO.getUser_interest();
        int food_favor = mDTO.getUser_food_favor();

        LifestyleDTO lDTO = lifestyleService.findLifestyleElememtByID(lifestyle);
        InterestDTO iDTO = lifestyleService.findInterestElememtByID(interest);
        FoodFavorDTO fDTO = lifestyleService.findFoodFavorElememtByID(food_favor);
        HashMap<String, Object> map = new HashMap<>();
        map.put("lifestyle",lDTO);
        map.put("interest",iDTO);
        map.put("food_favor",fDTO);
        return map;
    }

    // 일반회원 정보 수정
    @PutMapping("/api/user")
    public int UserEdit(HttpSession session, @RequestBody HashMap<String, Object> map) throws Exception {

        MemberDTO mDTO = (MemberDTO) session.getAttribute("login");

        HashMap<String, Integer> LifeStyleMap = (HashMap<String, Integer>) map.get("lifestyle");
        HashMap<String, Integer> interestMap = (HashMap<String, Integer>) map.get("interest");
        HashMap<String, Integer> foodFavorMap = (HashMap<String, Integer>) map.get("food_favor");

        int lifestyle_ID = lifestyleService.findLifestyle(LifeStyleMap);
        int interest_ID = lifestyleService.findInterest(interestMap);
        int food_favor_ID = lifestyleService.findFoodFavor(foodFavorMap);
        //새로 받아온 요소들을 기존의 세션값에 업데이트를 시켜줘야하고, user테이블에 새로 업데이트시켜줘야한다.
        mDTO.setUser_lifestyle(lifestyle_ID);
        mDTO.setUser_interest(interest_ID);
        mDTO.setUser_food_favor(food_favor_ID);
        session.setAttribute("login", mDTO);
        return memberService.userEdit(mDTO);
    }
}
