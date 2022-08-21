package com.omealjomeal.service;

import com.omealjomeal.dao.FeedDAO;
import com.omealjomeal.dao.MemberDAO;
import com.omealjomeal.dao.ProductDAO;
import com.omealjomeal.dto.FeedDTO;
import com.omealjomeal.dto.FeedProductDTO;
import com.omealjomeal.dto.ProductDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service("feedService")
public class FeedServiceImpl implements FeedService{

    private final FeedDAO dao;
    private final MemberDAO memberDAO;

    @Override
    public int feedUpload(FeedDTO feedDTO) throws Exception {
        return dao.feedUpload(feedDTO);
    }

    @Override
    public int selectFeedId(FeedDTO feedDTO) throws Exception {
        return dao.selectFeedId(feedDTO);
    }

    @Override
    public int feedProductUpload(FeedProductDTO feedProductDTO) throws Exception {
        return dao.feedProductUpload(feedProductDTO);
    }

    @Override
    public List<Map<Object, Object>> feedView() throws Exception {
        return dao.feedView();
    }


}
