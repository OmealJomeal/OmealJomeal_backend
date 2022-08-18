package com.omealjomeal.service;

import com.omealjomeal.dto.MemberDTO;

import java.util.HashMap;
import java.util.Map;

public interface MemberService {

    //로그인
    public MemberDTO selectMember(HashMap<String, Object> map) throws Exception;

    // 일반회원가입
    public int generalSignUp(MemberDTO dto) throws Exception;

    // 아이디 중복 체크
    public int checkId(String email) throws Exception;


}
