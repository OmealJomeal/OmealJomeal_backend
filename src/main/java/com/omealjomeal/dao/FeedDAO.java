package com.omealjomeal.dao;

import com.omealjomeal.dto.FeedDTO;
import com.omealjomeal.dto.FeedLikesDTO;
import com.omealjomeal.dto.FeedProductDTO;
import com.omealjomeal.dto.ProductDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository("feedDAO")
public class FeedDAO {

    @Autowired
    SqlSession sqlSession;

    public int feedUpload(FeedDTO feedDTO) throws Exception {
        return sqlSession.insert("com.config.FeedMapper.feedUpload", feedDTO);
    }

    public int selectFeedId(FeedDTO feedDTO) throws Exception {
        return sqlSession.selectOne("com.config.FeedMapper.selectFeedId", feedDTO);
    }

    public int feedProductUpload(FeedProductDTO feedProductDTO) throws Exception {
        return sqlSession.insert("com.config.FeedMapper.feedProductUpload", feedProductDTO);
    }

    public List<Map<Object, Object>> feedView() throws Exception {
        return sqlSession.selectList("com.config.FeedMapper.feedView");
    }

    public List<Map<Object, Object>> feedViewMainFit(int user_id) throws Exception {
        return sqlSession.selectList("com.config.FeedMapper.feedViewMainFit",user_id);
    }

    public FeedDTO feedDetail(int feed_id) throws Exception {
        return sqlSession.selectOne("com.config.FeedMapper.feedDetail",feed_id);
    }
    public List<ProductDTO> feedDetailProductList(int feed_id) throws Exception {
        return sqlSession.selectList("com.config.FeedMapper.feedDetailProductList",feed_id);
    }

    public int feedLikesInsert(FeedLikesDTO feedLikesDTO) throws Exception {
        return sqlSession.insert("com.config.FeedMapper.feedLikesInsert", feedLikesDTO);
    }
}
