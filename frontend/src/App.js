import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Header from "./common/header/Header";
import NavBar from "./common/navbar/NavBar";
import Main from "./pages/main/Main";
import MyPage from "./pages/mypage/MyPage";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Cart from "./pages/carts/Cart";
import CreateFeed from "./pages/createfeed/CreateFeed";
import ProductDetail from "./pages/productdetail/ProductDetail";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import CurlyTable from "./pages/curlytable/CurlyTable";
import FeedDetail from "./pages/feeddetail/FeedDetail";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [logined, setLogined] = useState("logined");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/loginSession")
      .then((response) => {
        console.log("로그인 세션", response);
        setLogined(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="AppFonts">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header logined={logined} />
            <NavBar />
            <Routes className="App">
              <Route path="/" element={<Main />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/mypage" element={<MyPage />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/createfeed" element={<CreateFeed />}></Route>
              <Route path="/createproduct" element={<CreateProduct />}></Route>
              <Route path="/curlytable" element={<CurlyTable />}></Route>
              <Route
                path="/productdetail/:id"
                element={<ProductDetail />}
              ></Route>
              <Route path="/feeddetail/:id" element={<FeedDetail />}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
