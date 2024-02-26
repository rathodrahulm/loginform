import styled from "styled-components"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Navbar from "./Component/Navbar"

import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Home from "./Pages/Home"

const Container = styled.div``

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />}  />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App