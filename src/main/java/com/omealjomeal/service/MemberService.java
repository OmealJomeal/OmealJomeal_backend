package com.omealjomeal.service;

import com.omealjomeal.dto.MemberDTO;

import java.util.Map;

public interface MemberService {

    public MemberDTO selectMember(Map<String, Integer> map) throws Exception;



}
