package com.omealjomeal.dao;

import com.omealjomeal.dto.InterestDTO;
import com.omealjomeal.dto.LifestyleDTO;
import com.omealjomeal.dto.MemberDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Repository("LifestyleDAO")
public class LifestyleDAO {

    @Autowired
    SqlSession sqlSession;

    //
    public int findLifestyle(HashMap<String, Integer> map) throws Exception {
        return sqlSession.selectOne("com.config.LifeStyleMapper.findLifestyle", map);
    }

    public int findInterest(HashMap<String, Integer> map) throws Exception {
        return sqlSession.selectOne("com.config.LifeStyleMapper.findInterest", map);
    }

    public int findFoodFavor(HashMap<String, Integer> map) throws Exception {
        return sqlSession.selectOne("com.config.LifeStyleMapper.findFoodFavor", map);
    }

}
