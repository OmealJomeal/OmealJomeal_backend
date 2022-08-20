package com.omealjomeal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Alias("LifestyleDTO")
public class LifestyleDTO {

    int lifestyle_id;
    int livealone;
    int gender;
    int child;
    int worker;
    int couple;
    int homemaker;
    int baby;

}
