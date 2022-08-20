package com.omealjomeal.service;

import com.omealjomeal.dao.FeedDAO;
import com.omealjomeal.dao.ProductDAO;
import com.omealjomeal.dto.FeedDTO;
import com.omealjomeal.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("feedService")
public class FeedServiceImpl implements FeedService{

    @Autowired
    FeedDAO dao;

    @Override
    public int feedUpload(FeedDTO feedDTO) throws Exception {
        return dao.feedUpload(feedDTO);
    }

    @Override
    public int selectFeedId(FeedDTO feedDTO) throws Exception {
        return dao.feedUpload(feedDTO);
    }

}
