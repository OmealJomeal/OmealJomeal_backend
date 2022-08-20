package com.omealjomeal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Alias("MemberDTO")
public class MemberDTO {

    int user_id;
    String user_password;
    String user_name;
    String user_email;
    String user_phone;
    String user_address;
    String user_gender;
    int user_lifestyle;
    int user_interest;
    int user_food_favor;
    String user_access_time;

}
