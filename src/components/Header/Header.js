import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
function Header() {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  );
}
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 100%;
`;
export default Header;
