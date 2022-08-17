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

    String user_Id;
    String user_password;
    String user_name;
    String user_email;
    String user_phone;
    String user_address;
    String user_gender;
    String user_lifestyle;
    String user_interest;
    String user_food_favor;
    String user_access_time;

}
