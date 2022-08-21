package com.omealjomeal.service;

import com.omealjomeal.dao.MemberDAO;
import com.omealjomeal.dto.MemberDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service("memberService")
public class MemberServiceImpl implements MemberService{

    private final MemberDAO memberDAO;

    //로그인
    @Transactional
    @Override
    public MemberDTO selectMember(HashMap<String, Object> map) throws Exception {
        memberDAO.updateDatetime(map);
        return memberDAO.selectMember(map);
    }

    // 일반회원가입
    @Override
    public int generalSignUp(HashMap<String, Object> map) throws Exception {
        return memberDAO.generalSignUp(map);
    }

    // 아이디 중복 체크
    @Override
    public int checkId(String email) throws Exception {
        return memberDAO.checkId(email);
    }

    @Override
    public int userEdit(MemberDTO dto) throws Exception {
        return memberDAO.userEdit(dto);
    }

    @Override
    public List<Map<String,Integer>> memberView() throws Exception {
        return memberDAO.memberView();
    }

}
