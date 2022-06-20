import React from "react";
import styled from "styled-components";
import logo from "./images/logo.png";
const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="row">
        <img src={logo} alt="" />
        <h1>BMF Attorneys</h1>
      </div>
    </NavbarContainer>
  );
};
const NavbarContainer = styled.div`
  width: 100%;
  height: auto;

  .row {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
`;
export default Navbar;
