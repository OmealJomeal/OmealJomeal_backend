import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import axios from "axios";

const Line = styled.div`
  width: 840px;
  height: 1.5px;
  background-color: #333;
  margin-bottom: 50px;
`;

const UnitBox = styled.div`
  width: 700px;
  height: 80px;
  margin: 0px auto;
  display: flex;
`;

const SelectBox = styled.label`
  display: inline-block;
  width: 160px;
  margin: 0px 10px;
  height: 40px;
`;

const Indicator = styled.div`
  width: 100px;
  margin: 17px 40px 17px 0px;
  font-size: 15px;
`;

const FixButton = styled.button`
  width: 350px;
  height: 56px;
  flex-grow: 0;
  margin: 20px auto 0px auto;
  padding: 17px 91px;
  border-radius: 3px;
  background-color: #5f0080;
  color: white;
  font-weight: bold;
`;

const MyPage = () => {
  // const myfavorite = {
  //   lifestyle: {
  //     livealone: 0,
  //     gender: 0,
  //     child: 0,
  //     worker: 0,
  //     couple: 0,
  //     homemaker: 1,
  //     baby: 1,
  //   },
  //   interest: {
  //     pet: 0,
  //     outdoor: 1,
  //     health: 0,
  //     baking: 0,
  //     cooking: 0,
  //     babycare: 1,
  //   },
  //   food_favor: { sweetness: 0, bitter: 1, sour_taste: 0, salty: 0, spicy: 1 },
  // };

  const [myfav, setMyfav] = useState(null);

  const [livealone, setLiveAlone] = useState(false);
  const [gender, setGender] = useState(false);
  const [child, setChild] = useState(false);
  const [worker, setWorker] = useState(false);
  const [couple, setCouple] = useState(false);
  const [homemaker, setHomemaker] = useState(false);
  const [baby, setBaby] = useState(false);
  const [pet, setPet] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [health, setHealth] = useState(false);
  const [baking, setBaking] = useState(false);
  const [cooking, setCooking] = useState(false);
  const [babycare, setBabycare] = useState(false);
  const [sweetness, setSweetness] = useState(false);
  const [bitter, setBitter] = useState(false);
  const [sour_taste, setSour] = useState(false);
  const [salty, setSalty] = useState(false);
  const [spicy, setSpicy] = useState(false);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => {
        console.log("마이페이지", response);
        setMyfav(response.data);
      })
      .catch((error) => {
        console.log("마이페이지", error.response);
      });
  }, []);

  useEffect(() => {
    if (myfav) {
      setLiveAlone(myfav.lifestyle.livealone);
      setGender(myfav.lifestyle.gender);
      setChild(myfav.lifestyle.child);
      setWorker(myfav.lifestyle.worker);
      setCouple(myfav.lifestyle.couple);
      setHomemaker(myfav.lifestyle.homemaker);
      setBaby(myfav.lifestyle.baby);
      setPet(myfav.interest.pet);
      setOutdoor(myfav.interest.outdoor);
      setHealth(myfav.interest.health);
      setBaking(myfav.interest.baking);
      setCooking(myfav.interest.cooking);
      setBabycare(myfav.interest.babycare);
      setSweetness(myfav.food_favor.sweetness);
      setBitter(myfav.food_favor.bitter);
      setSour(myfav.food_favor.sour_taste);
      setSalty(myfav.food_favor.salty);
      setSpicy(myfav.food_favor.spicy);
    }
  }, [myfav]);

  const onToggle = (e) => {
    switch (e.target.name) {
      case "livealone":
        return setLiveAlone(!livealone);
      case "child":
        return setChild(!child);
      case "worker":
        return setWorker(!worker);
      case "couple":
        return setCouple(!couple);
      case "homemaker":
        return setHomemaker(!homemaker);
      case "baby":
        return setBaby(!baby);
      case "pet":
        return setPet(!pet);
      case "outdoor":
        return setOutdoor(!outdoor);
      case "health":
        return setHealth(!health);
      case "baking":
        return setBaking(!baking);
      case "cooking":
        return setCooking(!cooking);
      case "babycare":
        return setBabycare(!babycare);
      case "sweetness":
        return setSweetness(!sweetness);
      case "bitter":
        return setBitter(!bitter);
      case "sour_taste":
        return setSour(!sour_taste);
      case "salty":
        return setSalty(!salty);
      case "spicy":
        return setSpicy(!spicy);
      default:
        return;
    }
  };

  const onClickFix = () => {
    const data = {
      lifestyle: {
        livealone: livealone ? 1 : 0,
        gender: gender ? 1 : 0,
        child: child ? 1 : 0,
        worker: worker ? 1 : 0,
        couple: couple ? 1 : 0,
        homemaker: homemaker ? 1 : 0,
        baby: baby ? 1 : 0,
      },
      interest: {
        pet: pet ? 1 : 0,
        outdoor: outdoor ? 1 : 0,
        health: health ? 1 : 0,
        baking: baking ? 1 : 0,
        cooking: cooking ? 1 : 0,
        babycare: babycare ? 1 : 0,
      },
      food_favor: {
        sweetness: sweetness ? 1 : 0,
        bitter: bitter ? 1 : 0,
        sour_taste: sour_taste ? 1 : 0,
        salty: salty ? 1 : 0,
        spicy: spicy ? 1 : 0,
      },
    };
    axios
      .put("/api/user", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          data,
        },
      })
      .then((response) => {
        console.log(response);
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(JSON.stringify(data));
      });
  };

  return (
    <>
      <div style={{ width: "840px", margin: "0 auto" }}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            width: "840px",
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          마이페이지
        </div>
        <div style={{}}></div>
        <Line></Line>
        <UnitBox style={{ margin: "30px auto 60px auto" }}>
          <Indicator>라이프 스타일</Indicator>
          <div
            style={{
              width: "600px",
              justifyContent: "center",
            }}
          >
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="livealone"
                label="혼자 살아요"
                checked={livealone ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="child"
                label="아이가 있어요"
                checked={child ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="worker"
                label="직장인이에요"
                checked={worker ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="couple"
                label="커플이에요"
                checked={couple ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="homemaker"
                label="가정주부에요"
                checked={homemaker ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="baby"
                label="영유아가 있어요"
                checked={baby ? true : false}
              ></CheckBox>
            </SelectBox>
          </div>
        </UnitBox>
        <UnitBox style={{ margin: "60px auto" }}>
          <Indicator>관심 분야</Indicator>
          <div
            style={{
              width: "600px",
              justifyContent: "center",
            }}
          >
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="pet"
                label="반려 동물"
                checked={pet ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="outdoor"
                label="야외 활동"
                checked={outdoor ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="health"
                label="건강"
                checked={health ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="baking"
                label="제과/제빵"
                checked={baking ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="cooking"
                label="요리"
                checked={cooking ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="babycare"
                label="아기 돌보기"
                checked={babycare ? true : false}
              ></CheckBox>
            </SelectBox>
          </div>
        </UnitBox>
        <UnitBox style={{ margin: "60px auto" }}>
          <Indicator>음식 취향</Indicator>
          <div
            style={{
              width: "600px",
              justifyContent: "center",
            }}
          >
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="sweetness"
                label="달달한 맛"
                checked={sweetness ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="bitter"
                label="쓴 맛"
                checked={bitter ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="sour_taste"
                label="신 맛"
                checked={sour_taste ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="salty"
                label="짠 맛"
                checked={salty ? true : false}
              ></CheckBox>
            </SelectBox>
            <SelectBox>
              <CheckBox
                onClick={onToggle}
                type="checkbox"
                name="spicy"
                label="매운 맛"
                checked={spicy ? true : false}
              ></CheckBox>
            </SelectBox>
          </div>
        </UnitBox>
        <UnitBox>
          <FixButton onClick={onClickFix}>회원정보 수정하기</FixButton>
        </UnitBox>
      </div>
    </>
  );
};

export default MyPage;
