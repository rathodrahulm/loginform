import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
 width: 90%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ForgotPasswordLink = styled(Link)`
  margin-bottom: 10px;
  text-decoration: none;
  color: gray;
  font-size: 14px;
  text-align: center;
`;

const CreateAccountLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: blue;
  text-align: center;
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;


const Login = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate()

  const validateForm = () => {
    const errors = {};

    // Validation rules
    if (!formData.email.trim()) {
      errors.email = "email is required";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:3001/login", formData)
        .then((result) => {
          console.log(result);
          if (result.data === "success") {
            navigate("/home");
          }
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    }
  };
  
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}>
        <Input
            placeholder="email"
            autoComplete="off"
           value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {formErrors.email && <Error>{formErrors.email}</Error>}
          <Input
            placeholder="password"
            autoComplete="off"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {formErrors.password && <Error>{formErrors.password}</Error>}
          <Button type="submit">LOGIN</Button>
          <ForgotPasswordLink to="/forgot-password">
            FORGOT PASSWORD?
          </ForgotPasswordLink>
          <CreateAccountLink to="/register">CREATE A NEW ACCOUNT</CreateAccountLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;