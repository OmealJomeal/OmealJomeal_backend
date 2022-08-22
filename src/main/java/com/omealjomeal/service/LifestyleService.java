package com.omealjomeal.service;

import com.omealjomeal.dto.FoodFavorDTO;
import com.omealjomeal.dto.InterestDTO;
import com.omealjomeal.dto.LifestyleDTO;
import java.util.HashMap;

public interface LifestyleService {

    //라이프스타일 조회
    public int findLifestyle(HashMap<String, Integer> map) throws Exception;
    public int findInterest(HashMap<String, Integer> map) throws Exception;
    public int findFoodFavor(HashMap<String, Integer> map) throws Exception;
    public LifestyleDTO findLifestyleElememtByID(int lifestyle) throws Exception;
    public InterestDTO findInterestElememtByID(int interest) throws Exception;
    public FoodFavorDTO findFoodFavorElememtByID(int food_favor) throws Exception;

}
