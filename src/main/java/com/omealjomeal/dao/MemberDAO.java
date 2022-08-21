package com.omealjomeal.dao;

import com.omealjomeal.dto.MemberDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository("memberDAO")
public class MemberDAO {

    @Autowired
    SqlSession sqlSession;

    // 로그인
    public MemberDTO selectMember(HashMap<String, Object> map) throws Exception {
        return sqlSession.selectOne("com.config.MemberMapper.selectMember", map);
    }
    // 접속일시 업데이트
    public int updateDatetime(HashMap<String, Object> map) throws Exception {
        return sqlSession.update("com.config.MemberMapper.updateDatetime", map);
    }

    // 일반회원가입
    public int generalSignUp(HashMap<String, Object> map) throws Exception {
        return sqlSession.insert("com.config.MemberMapper.generalSignUp", map);
    }

    // 아이디 중복 체크
    public int checkId(String email) throws Exception {
        return sqlSession.selectOne("com.config.MemberMapper.checkId", email);
    }

    // 일반회원 정보수정
    public int userEdit(MemberDTO dto) throws Exception {
        return sqlSession.update("com.config.MemberMapper.userEdit", dto);
    }

    //멤버전체 추천요소 조회
    public List<Map<String,Integer>> memberView(int user_id) throws Exception {
        return sqlSession.selectList("com.config.MemberMapper.memberView",user_id);
    }

    public Map<String, Integer> currentMemberView(int user_id) throws Exception {
        return sqlSession.selectOne("com.config.MemberMapper.currentMemberView",user_id);
    }
}
