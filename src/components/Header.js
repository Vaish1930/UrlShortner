import React from "react";
import styled from "styled-components";

import Colors from "./Colors";

function Header() {
  return (
    <HeaderContainer>
      <Title>Url Shortner</Title>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${Colors.primary};
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h1`
  color: #fff;
`;
