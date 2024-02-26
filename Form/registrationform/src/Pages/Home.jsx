import styled from "styled-components";
import React from "react";

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/628281/pexels-photo-628281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 5vw;
  font-weight: 600;
  color: brown;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;


const Home = () => {
  return (
    <Container>
    <Title>WELCOME TO THE FUSION INSTITUTE</Title>
    </Container>
  );
};

export default Home;
