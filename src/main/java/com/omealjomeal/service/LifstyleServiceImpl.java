package com.omealjomeal.service;

import com.omealjomeal.dao.LifestyleDAO;
import com.omealjomeal.dao.MemberDAO;
import com.omealjomeal.dto.LifestyleDTO;
import com.omealjomeal.dto.MemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

@Service("LifestyleService")
public class LifstyleServiceImpl implements LifestyleService{

    @Autowired
    LifestyleDAO lifestyleDAO;


    @Override
    public int findLifestyle(HashMap<String, Integer> map) throws Exception {
        return lifestyleDAO.findLifestyle(map);
    }

    @Override
    public int findInterest(HashMap<String, Integer> map) throws Exception {
        return lifestyleDAO.findInterest(map);
    }

    @Override
    public int findFoodFavor(HashMap<String, Integer> map) throws Exception {
        return lifestyleDAO.findFoodFavor(map);
    }
}
