package com.omealjomeal.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface CartService {

    //글쓰기
    public int cartInsert(HashMap<String, Integer> cartMap) throws Exception;
    public List<Map<String,Object>> cartView(int user_id) throws Exception;
    public int cartViewCheck(HashMap<String, Integer> map) throws Exception;


}
