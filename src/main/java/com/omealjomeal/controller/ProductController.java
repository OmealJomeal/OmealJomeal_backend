package com.omealjomeal.controller;

import com.omealjomeal.dto.MemberDTO;
import com.omealjomeal.dto.ProductDTO;
import com.omealjomeal.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    // 글 등록
    @PostMapping("/api/product/write")
    public int productWrite(@RequestBody ProductDTO pDto, HttpSession session)
            throws Exception {
        MemberDTO mDto = (MemberDTO) session.getAttribute("login");

        return productService.insert(pDto);
    }

//    // 챌린지 저장
//    @PostMapping("/api/chatbot/challenge")
//    public Map<String, Object> insertChallenge(HttpServletRequest request, ChallengeDTO challengeDTO,
//                                               @RequestParam("multipartFile") MultipartFile multipartFile) throws Exception {
//        MemberDTO login = principalDetails.getMemberDTO();
//        int memberId = login.getId();
//        Calendar calendar = Calendar.getInstance();
//        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
//        String datetime = simpleDateFormat.format(calendar.getTime());
//        multipartFile.transferTo(new File(uploadPath + "challenge/", memberId + "_" + datetime + ".png"));
//        Map<String, Object> response = new HashMap<String, Object>();
//        response.put("flag", false);
//        /* ----------이미지 분석---------- */
//        boolean result = getResult();
//        /* ----------------------------------- */
//        if (result) {
//            challengeDTO.setMemberId(memberId);
//            challengeDTO.setDatetime(datetime);
//            int cnt = chatBotService.insertChallenge(challengeDTO);
//            if (cnt == 1) {
//                login.setPoint(login.getPoint() + 5);
//                response.put("flag", true);
//            }
//        }
//        return response;
//    }

}
