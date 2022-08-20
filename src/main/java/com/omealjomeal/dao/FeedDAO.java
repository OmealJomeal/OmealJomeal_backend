package com.omealjomeal.dao;

import com.omealjomeal.dto.FeedDTO;
import com.omealjomeal.dto.FeedProductDTO;
import com.omealjomeal.dto.ProductDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("feedDAO")
public class FeedDAO {

    @Autowired
    SqlSession sqlSession;

    public int feedUpload(FeedDTO feedDTO) throws Exception {
        return sqlSession.insert("com.config.FeedMapper.feedUpload", feedDTO);
    }

    public int selectFeedId(FeedDTO feedDTO) throws Exception {
        return sqlSession.insert("com.config.FeedMapper.selectFeedId", feedDTO);
    }
    public int feedProductUpload(FeedProductDTO feedProductDTO) throws Exception {
        return sqlSession.insert("com.config.FeedMapper.feedProductUpload", feedProductDTO);
    }




}
