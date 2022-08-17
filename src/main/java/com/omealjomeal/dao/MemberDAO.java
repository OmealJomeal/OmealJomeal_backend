package com.omealjomeal.dao;

import com.omealjomeal.dto.MemberDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository("memberDAO")
public class MemberDAO {

    @Autowired
    SqlSession sqlSession;

    // 로그인
    public MemberDTO selectMember(Map<String, Integer> map) throws Exception {
        return sqlSession.selectOne("com.config.MemberMapper.selectMember", map);
    }
    // 접속일시 업데이트
    public int updateDatetime(Map<String, String> map) throws Exception {
        return sqlSession.update("com.config.MemberMapper.updateDatetime", map);
    }
}
