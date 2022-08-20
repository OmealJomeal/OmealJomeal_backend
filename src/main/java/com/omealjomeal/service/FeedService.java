package com.omealjomeal.service;

import com.omealjomeal.dto.FeedDTO;
import com.omealjomeal.dto.FeedProductDTO;
import com.omealjomeal.dto.ProductDTO;

import java.util.List;

public interface FeedService {

    //글쓰기
    public int feedUpload(FeedDTO feedDTO) throws Exception;
    public int selectFeedId(FeedDTO feedDTO) throws Exception;
    public int feedProductUpload(FeedProductDTO feedProductDTO) throws Exception;


}