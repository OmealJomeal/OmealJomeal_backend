package com.omealjomeal.service;

import com.omealjomeal.dto.MemberDTO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface MemberService {

    //로그인
    public MemberDTO selectMember(HashMap<String, Object> map) throws Exception;

    // 일반회원가입
    public int generalSignUp(HashMap<String, Object> map) throws Exception;

    // 아이디 중복 체크
    public int checkId(String email) throws Exception;

    // 정보수정
    public int userEdit(MemberDTO dto) throws Exception;

    //member 조회
    public List<HashMap<String, Integer>> memberView(int user_id) throws Exception;
    public Map<String,Integer> currentMemberView(int user_id) throws Exception;

}
