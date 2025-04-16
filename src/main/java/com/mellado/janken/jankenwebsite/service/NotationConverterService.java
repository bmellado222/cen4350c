package com.mellado.janken.jankenwebsite.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class NotationConverterService {
    private final Map<String, String> imageMap;

    public NotationConverterService() {
        imageMap = new HashMap<>();
        imageMap.put("f", "https://drive.google.com/uc?id=1gKEXBP7SIjofojPZdBBeCYLlwxZ9damW");
        imageMap.put("fh", "https://drive.google.com/uc?id=1dFdhX7qBUvDlqRwDvJZVqz0-XpVs5ATY");
        imageMap.put("n", "https://drive.google.com/uc?id=1mHDCtR-fksHSzC2bUoiK4Fb3QLAGxbyK");
        imageMap.put("d", "https://drive.google.com/uc?id=1bWNOVeM7BuQdCvb0nYeh3xzusgHaYH4V");
        imageMap.put("df", "https://drive.google.com/uc?id=1qJZfnq541EsMbZW0c2s5itoY0-HO_WEx");
        imageMap.put("dfh", "https://drive.google.com/uc?id=1Ttq642FLAjIEMGVgAfF_KiqNm6mtkyWI");
        imageMap.put("u", "https://drive.google.com/uc?id=11c-Haa8Wx0wAr42cIopu5V4MJPSKdJV7");
        imageMap.put("uf", "https://drive.google.com/uc?id=1CYSGPKMpirvv_V1zAy6k55UJ4oxbvWbZ");
        imageMap.put("db", "https://drive.google.com/uc?id=1QUMKVVe2sdjr7hs_3TfA-NpW1cUyzTZ8");
        imageMap.put("dbh", "https://drive.google.com/uc?id=1WqyP_kwbzn4pc4x4QrWNlW7TcZbKpCxl");
        imageMap.put("b", "https://drive.google.com/uc?id=1BYxlIq75WIE3gjSFPzjDPB-T3px-0qbu");
        imageMap.put("bh", "https://drive.google.com/uc?id=1UZ7w3mdejDudC5RZ7RyXk4PQCXsotP8t");
        imageMap.put("ub", "https://drive.google.com/uc?id=1gDmmjf7BK0ciDPUNvoHyQZoD2B1Vwwl9");
        imageMap.put("t", "https://drive.google.com/uc?id=1cwKOmUYlHaMCjxTw2C-uzFhqo0Og59Ur");
        imageMap.put(">", "https://drive.google.com/uc?id=12lRtKAbYuhPzc_rX_QKTgw9KqovayZQF");
        imageMap.put("1", "https://drive.google.com/uc?id=1_AlPgMFAZg05a1MIsx5DBxkeKfCHyjT6");
        imageMap.put("2", "https://drive.google.com/uc?id=1Zj6o6-2ZH41A63HuyPth536SXW62fwWt");
        imageMap.put("3", "https://drive.google.com/uc?id=1QiEPGExYPkk3YmZARlj99pbMR5-ZDhU8");
        imageMap.put("4", "https://drive.google.com/uc?id=161MX--ujVqSzqQZUV2XoLUw7MmKSEjwx");
        imageMap.put("1+2", "https://drive.google.com/uc?id=1VHu6NTCCWTLPzvnVARJbC7bliVQMZFKC");
        imageMap.put("1+2+3", "https://drive.google.com/uc?id=1f-yjkK3DWrvT9NzI1Ue4DvYQ5fvEsvmN");
        imageMap.put("3+4", "https://drive.google.com/uc?id=1f6X1sPN-YXMsXz9wSIU8U6xFwhSrS2UO");



    }

    public String getImageForCharacter(String character) {
        return imageMap.getOrDefault(character, "");
    }
}
