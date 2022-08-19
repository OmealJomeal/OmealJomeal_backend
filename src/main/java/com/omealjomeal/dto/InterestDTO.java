package com.omealjomeal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.ibatis.type.Alias;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Alias("InterestDTO")
public class InterestDTO {

    int pet;
    int outdoor;
    int health;
    int baking;
    int cooking;
    int babycare;

}
