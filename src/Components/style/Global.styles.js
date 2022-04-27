import styled from "styled-components";

export const Section = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;
export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: none;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);

  @media (max-width: 784px) {
    width: 48px;
    height: 4px;
  }
  @media (max-width: 652px) {
    width: 32px;
    height: 2px;
  }
`;

export const SectionTitle = styled.h2`
  width: max-content;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  font-weight: 800;
  font-size: 3.5rem;
  margin: 20px 0 ;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-background-clip: text;

  -webkit-text-fill-color: transparent;
  -o-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media (max-width: 652px) {
    width: 100%;
    font-size: 1.8rem;
    line-height: normal;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width:784px) {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media (max-width:652px) {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
