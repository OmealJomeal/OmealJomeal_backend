import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";

const Feed = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "600px",
            height: "150px",
            margin: "70px 0px 90px 0px",
            lineHeight: "25px",
            top: "10px",
            marginBottom: "150px",
            position: "relative",
            top: "50px",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "16px" }}>
            17만 팔로워 인스타그래머 솜솜이의 홈카페를 우리집으로
          </div>
          <div style={{ fontSize: "14px" }}>
            오픈, 홈카페는 인스타그래머 솜솜이(박성미)의 홈카페 시리즈 신작이다.
            아이스 음료 레시피를 소개했던 하루하루, 홈카페에 이어 두 번째
            책에서는 카페 스타일 디저트와 식사 메뉴를 선보인다. 저자는 전작 출시
            이후 그녀의 홈카페를 리뉴얼했다. 음료에 어울리는 빵을 반죽하고
            케이크를 구웠다.
          </div>
          <div style={{ fontSize: "14px", color: "#885EA7" }}>
            by 오픈 홈카페 |
            <span style={{ fontWeight: "bold" }}>솜솜이 (박성미)</span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <BsHandThumbsUp
            style={{
              width: "30px",
              height: "30px",
              display: "block",
              cursor: "pointer",
            }}
          ></BsHandThumbsUp>
          <div
            style={{
              position: "relative",
              left: "10px",
              lineHeight: "30px",
            }}
          >
            10
          </div>
        </div>
        <img
          alt="column"
          src={process.env.PUBLIC_URL + "./img/column4.png"}
          style={{ position: "absolute", right: "0px", top: "0px" }}
        ></img>
      </div>
    </>
  );
};

export default Feed;
