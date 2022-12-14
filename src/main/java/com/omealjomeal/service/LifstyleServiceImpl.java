package com.omealjomeal.service;

import com.omealjomeal.dao.LifestyleDAO;
import com.omealjomeal.dto.FoodFavorDTO;
import com.omealjomeal.dto.InterestDTO;
import com.omealjomeal.dto.LifestyleDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@RequiredArgsConstructor
@Service("lifestyleService")
public class LifstyleServiceImpl implements LifestyleService{


    private final LifestyleDAO lifestyleDAO;


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

    @Override
    public LifestyleDTO findLifestyleElememtByID(int lifestyle) throws Exception {
        return lifestyleDAO.findLifestyleElememtByID(lifestyle);
    }

    @Override
    public InterestDTO findInterestElememtByID(int interest) throws Exception {
        return lifestyleDAO.findInterestElememtByID(interest);
    }

    @Override
    public FoodFavorDTO findFoodFavorElememtByID(int food_favor) throws Exception {
        return lifestyleDAO.findFoodFavorElememtByID(food_favor);
    }
}
