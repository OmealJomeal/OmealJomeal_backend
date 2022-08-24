package com.omealjomeal.service;

import com.omealjomeal.dto.FeedDTO;
import com.omealjomeal.dto.FeedLikesDTO;
import com.omealjomeal.dto.FeedProductDTO;
import com.omealjomeal.dto.ProductDTO;
import java.util.List;
import java.util.Map;

public interface FeedService {

    //피드업로드
    public int feedUpload(FeedDTO feedDTO) throws Exception;
    //피드 업로드 후 피드 아이디 조회
    public List<Integer> selectFeedId(FeedDTO feedDTO) throws Exception;
    //피드와 연결되어있는 feedProduct테이블에 업로드.
    public int feedProductUpload(FeedProductDTO feedProductDTO) throws Exception;
    public List<Map<Object,Object>> feedView() throws Exception;
    public List<Map<Object,Object>> feedViewTop() throws Exception;
    public List<Map<Object,Object>> feedViewMainFit(int user_id) throws Exception;
    public Map<Object,Object> feedDetail(int feed_id) throws Exception;
    public List<ProductDTO> feedDetailProductList(int feed_id) throws Exception;
    public int feedLikesInsert(FeedLikesDTO feedLikesDTO) throws Exception;
    public FeedLikesDTO checkFeedLikes(FeedLikesDTO feedLikesDTO) throws Exception;
    public int feedDelete(int feed_id) throws Exception;


}
