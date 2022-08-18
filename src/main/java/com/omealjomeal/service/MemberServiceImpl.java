package com.omealjomeal.service;

import com.omealjomeal.dao.MemberDAO;
import com.omealjomeal.dto.MemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Service("memberService")
public class MemberServiceImpl implements MemberService{

    @Autowired
    MemberDAO memberDAO;

    //로그인
    @Transactional
    @Override
    public MemberDTO selectMember(HashMap<String, Object> map) throws Exception {
        memberDAO.updateDatetime(map);
        return memberDAO.selectMember(map);
    }

    // 일반회원가입
    @Override
    public int generalSignUp(MemberDTO dto) throws Exception {
        return memberDAO.generalSignUp(dto);
    }

    // 아이디 중복 체크
    @Override
    public int checkId(String email) throws Exception {
        return memberDAO.checkId(email);
    }
}
