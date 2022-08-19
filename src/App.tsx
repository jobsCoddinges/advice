import React from "react";
import "./App.css";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchAdvice } from "./api/api";

const Background = styled.div<{ randomImg: string }>`
  @import url("https://fonts.googleapis.com/css2?family=Cute+Font&display=swap");
  font-family: "Cute Font", cursive;
  background-image: url(${(props) => props.randomImg});
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100vw;
`;
const Title = styled.h1`
  font-size: 100px;
  color: white;
  padding: 10vh;
`;

function App() {
  const { isLoading, data } = useQuery("advice", fetchAdvice);
  if (data) console.log(data.slip.advice);

  const randomNumber = String(Math.ceil(Math.random() * 5));
  const randomImg = `/img/${randomNumber}.png`;
  console.log(randomImg);
  return (
    <div className="App">
      <Background randomImg={randomImg}>
        {!isLoading && <Title>{data.slip.advice}</Title>}
      </Background>
    </div>
  );
}

export default App;
