import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: px;
  background-color: teal;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  margin: 10px;
  align-items: center;
  color: aqua;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Nav = styled.h3``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>Fusion Institute.</Logo>
        </Center>
        <Right>
          <Nav style={{ textAlign: "center", marginTop: "20px" }}>
            <Link
              to="/"
              style={{
                padding: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              Home
            </Link>
            <Link
              to="/register"
              style={{
                padding: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              Register
            </Link>
            <Link
              to="/login"
              style={{
                padding: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              Login
            </Link>
          </Nav>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
