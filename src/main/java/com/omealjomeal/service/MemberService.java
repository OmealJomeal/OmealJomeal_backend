package com.omealjomeal.service;

import com.omealjomeal.dto.MemberDTO;

import java.util.HashMap;
import java.util.Map;

public interface MemberService {

    public MemberDTO selectMember(HashMap<String, Object> map) throws Exception;



}
