package com.omealjomeal.service;

import com.omealjomeal.dto.LifestyleDTO;
import com.omealjomeal.dto.MemberDTO;

import java.util.HashMap;

public interface LifestyleService {

    //라이프스타일 조회
    public int findLifestyle(HashMap<String, Integer> map) throws Exception;
    public int findInterest(HashMap<String, Integer> map) throws Exception;
    public int findFoodFavor(HashMap<String, Integer> map) throws Exception;

}
