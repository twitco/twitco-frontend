import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Logout = ({ setLogged }) => {
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    setLogged(false);
    setTimeout(() => navigate("/login"), 1000);
  });
  return (
    <LogoutStyle>
      <h2> Thank you for visiting TWITCO ฿!</h2>
    </LogoutStyle>
  );
};
const LogoutStyle = styled.div`
  margin-top: 15%;
  display: flex;
  justify-content: center;
`;

export default Logout;
