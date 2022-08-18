package com.omealjomeal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Alias("PlatingDTO")
public class PlatingDTO {

    String plating_Id;
    String plating_title;
    String plating_image;
    String plating_description;
    String plating_time;

    String user_Id;


}
