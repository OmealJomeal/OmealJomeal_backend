package com.omealjomeal.service;

import com.omealjomeal.dao.FeedDAO;
import com.omealjomeal.dao.MemberDAO;
import com.omealjomeal.dto.FeedDTO;
import com.omealjomeal.dto.FeedLikesDTO;
import com.omealjomeal.dto.FeedProductDTO;
import com.omealjomeal.dto.ProductDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service("feedService")
public class FeedServiceImpl implements FeedService{

    private final FeedDAO dao;

    @Override
    public int feedUpload(FeedDTO feedDTO) throws Exception {

        return dao.feedUpload(feedDTO) & dao.feedLikesInsertDefault(feedDTO);
    }

    @Override
    public List<Integer> selectFeedId(FeedDTO feedDTO) throws Exception {
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

    @Override
    public List<Map<Object, Object>> feedViewMainFit(int user_id) throws Exception {
        return dao.feedViewMainFit(user_id);
    }

    @Override
    public Map<Object,Object> feedDetail(int feed_id) throws Exception {
        return dao.feedDetail(feed_id);
    }

    @Override
    public List<ProductDTO> feedDetailProductList(int feed_id) throws Exception {
        return dao.feedDetailProductList(feed_id);
    }

    @Override
    public int feedLikesInsert(FeedLikesDTO feedLikesDTO) throws Exception {
        return dao.feedLikesInsert(feedLikesDTO);
    }

    @Override
    public FeedLikesDTO checkFeedLikes(FeedLikesDTO feedLikesDTO) throws Exception {
        return dao.checkFeedLikes(feedLikesDTO);
    }

    @Override
    public int feedDelete(int feed_id) throws Exception {
        return dao.feedDelete(feed_id);
    }

    @Override
    public List<Map<Object, Object>> feedViewTop() throws Exception {
        return dao.feedViewTop();
    }
}
