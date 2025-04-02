package com.mellado.janken.jankenwebsite.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CharacterComboService {
    private final Map<String, String> imageMap;

    public CharacterComboService() {
        imageMap = new HashMap<>();
        imageMap.put("f", "https://drive.google.com/FOR_F");
        imageMap.put("fh", "https://drive.google.com/FOR_FH");
        imageMap.put("n", "https://drive.google.com/FOR_N");
        imageMap.put("d", "https://drive.google.com/FOR_D");
        imageMap.put("df", "https://drive.google.com/FOR_DF");
        imageMap.put("dfh", "https://drive.google.com/FOR_DFH");
        imageMap.put("u", "https://drive.google.com/FOR_U");
        imageMap.put("uf", "https://drive.google.com/FOR_UF");
        imageMap.put("db", "https://drive.google.com/FOR_DB");
        imageMap.put("dbh", "https://drive.google.com/FOR_DBH");
        imageMap.put("b", "https://drive.google.com/FOR_B");
        imageMap.put("bh", "https://drive.google.com/FOR_BH");
        imageMap.put("ub", "https://drive.google.com/FOR_UB");
        imageMap.put("t", "https://drive.google.com/FOR_T");
        imageMap.put(">", "https://drive.google.com/FOR_Skip");
        imageMap.put("1", "https://drive.google.com/FOR_1");
        imageMap.put("2", "https://drive.google.com/FOR_2");
        imageMap.put("3", "https://drive.google.com/FOR_3");
        imageMap.put("4", "https://drive.google.com/FOR_4");
        imageMap.put("1+2", "https://drive.google.com/FOR_1+2");
        imageMap.put("1+2+3", "https://drive.google.com/FOR_1+2+3");
        imageMap.put("3+4", "https://drive.google.com/FOR_3+4");



    }

    public String getImageForCharacter(String character) {
        return imageMap.getOrDefault(character, "");
    }
}
