# OmealJomeal

##### _[frontend사이트는 여기!](https://github.com/OmealJomeal/OmealJomeal-FE)

## 소셜 네트워크와 게이미피케이션 기능을 접목한 추천 서비스 플랫폼, 오밀조밀

## 개발환경

- OS: windows 10
- 협업 툴: Notion
- 버전관리: Github
- FrontEnd
 Language: HTML5, &nbsp;CSS, &nbsp;JavaScript(ES6)
Framework: react

- BackEnd
Language: Java
Framework: Spring Boot 2.7.2
ORM: mybatis 2.1.4
DB: Oracle Database 19c Enterprise Edition
Server: Tomcat 9.0, Oracle Cloud
- Open API: Kakao 주소 API

## 오밀조밀 테이블 데이터 셋
[오밀조밀 table.pdf](https://github.com/OmealJomeal/OmealJomeal_backend/files/9413085/table.pdf)

## 플로우 차트
![플로우차트](https://user-images.githubusercontent.com/95620153/186335011-3d3b28d9-1b18-4d08-8086-369cb8927410.png)

## ERD설계
<img width="1310" alt="오밀조밀_ERD설계도" src="https://user-images.githubusercontent.com/95620153/186335055-a63615b1-9933-4521-9683-2d539694af45.png">

## 알고리즘
마켓컬리's 오밀조밀 서비스는<br/>
개개인의 성향을 파악하여 맞춤 추천 알고리즘을 제공합니다.<br/> 
라이프스타일(ex. 혼자살아요, 아이가 있어요, 가정주부에요) / <br/>
관심 분야 (ex. 반려 동물, 건강, 요리) /<br/>
음식 취향( ex. 달달한 맛, 매운 맛, 짠 맛) 을<br/>
유저별로 입력받아<br/>
성향이 비슷한 다른 유저의 피드 게시물을 추천해줍니다.<br/>
또 성향이 유사하지 않은 다른 유저의 피드 게시물도 추천해줌으로서 색다른 추천 또한 해줍니다.<br/>
성향 유사도는 18차원(18 = 입력받는 성향의 개수)의 유클리드 거리를 사용하여 계산합니다.
