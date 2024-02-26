import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load")
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
  margin-bottom: 10px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-left: 5px;
  text-align: center;
`;

const StyledtText = styled.p`
  color: black;
`



const Register = () => {


  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Validation rules
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;

  };
  console.log(formErrors)

  const handleSubmit = (e) => {

    e.preventDefault();
    if (validateForm()) {
    axios.post('http://localhost:3001/register', {formData})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err => console.log(err))
  }
    
  };

  if (registered) {
    // Redirect to login page after successful registration
    setRegistered(true);
    navigate("/")
  }


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
        <Input
            placeholder="name"
            autoComplete="off"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {formErrors.name && <Error>{formErrors.name}</Error>}
          <Input
            placeholder="last name"
            autoComplete="off"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          {formErrors.lastName && <Error>{formErrors.lastName}</Error>}
          <Input
            placeholder="username"
            autoComplete="off"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          {formErrors.username && <Error>{formErrors.username}</Error>}
          <Input
            placeholder="email"
            autoComplete="off"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {formErrors.email && <Error>{formErrors.email}</Error>}
          <Input
            placeholder="password"
            type="password"
            autoComplete="off"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {formErrors.password && <Error>{formErrors.password}</Error>}
          <Input
            placeholder="confirm password"
            type="password"
            autoComplete="off"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          {formErrors.confirmPassword && (
            <Error>{formErrors.confirmPassword}</Error>
            )}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <StyledtText>
            Already have an account ? <Link to="/login" style={{
                padding: "10px",
                textDecoration: "none",
                color: "blue",
              }}>login</Link>
          </StyledtText>

          <Button type="submit" >REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

