import React from "react";
import BgAnimation from "../BgAnimation/BgAnimation";
import {
  HeaderBtn,
  HeaderBtnBack,
  HeaderContainer,
  HeaderDescription,
  HeaderTitle,
  HeaderWrapper,
} from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle>Welcome to <br/> my personal Portfolio</HeaderTitle>
        <HeaderDescription>
          The purpose from my Portfolio to show you my efficient Projects
        </HeaderDescription>
        <HeaderBtnBack>
          <HeaderBtn
            onClick={() => {
              window.location =
                "https://docs.google.com/uc?export=download&id=1Ksin58JUDmsv0V_lp2-hKii8lE2lBypN";
            }}
          >
            Learn More
          </HeaderBtn>
        </HeaderBtnBack>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
