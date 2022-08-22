package com.omealjomeal.service;

import com.omealjomeal.dto.FeedDTO;
import com.omealjomeal.dto.FeedLikesDTO;
import com.omealjomeal.dto.FeedProductDTO;
import com.omealjomeal.dto.ProductDTO;

import java.util.List;
import java.util.Map;

public interface FeedService {

    //글쓰기
    public int feedUpload(FeedDTO feedDTO) throws Exception;
    public int selectFeedId(FeedDTO feedDTO) throws Exception;
    public int feedProductUpload(FeedProductDTO feedProductDTO) throws Exception;
    public List<Map<Object,Object>> feedView() throws Exception;
    public List<Map<Object,Object>> feedViewMainFit(int user_id) throws Exception;
    public FeedDTO feedDetail(int feed_id) throws Exception;
    public List<ProductDTO> feedDetailProductList(int feed_id) throws Exception;
    public int feedLikesInsert(FeedLikesDTO feedLikesDTO) throws Exception;
    public FeedLikesDTO checkFeedLikes(FeedLikesDTO feedLikesDTO) throws Exception;


}
