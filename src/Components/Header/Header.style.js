import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
`;

export const HeaderWrapper = styled.div`
  grid-area: 1/1/2/6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const HeaderTitle = styled.h2`
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  font-weight: 800;
  font-size: 4rem;
  line-height: 72px;
  padding-top: 80px;

  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-background-clip: text;

  -webkit-text-fill-color: transparent;
  -o-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media (max-width: 784px) {
    width: 100%;
    font-size: 1.8rem;
    line-height: normal;
  }
`;

export const HeaderDescription = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  width: 70%;
  padding: 30px 0;
  line-height: 40px;
  font-weight: 300;

  @media (max-width: 784px) {
    width: 100%;
    padding: 20px 0;
    font-size: 1rem;
    line-height: 25px;
  }
`;
export const HeaderBtnBack = styled.div`
  width: 262px;
  height: 64px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 784px) {
    margin-bottom: 0;
  }

  @media (max-width: 652px) {
    margin-bottom: 0;
    width: 100%;
    height: 32px;
  }
`;

export const HeaderBtn = styled.button`
  border: none;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
  background: transparent;

  @media (max-width: 784px) {
    font-size: 16px;
  }
  @media (max-width: 652px) {
    font-size: 14px;
  }
`;

export const BgAnimation = styled.img`
  grid-area: 1/4/2/6;
`;
