import styled from "styled-components";
import { DiReact } from "react-icons/di";

export const TechBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const careerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CareerHead = styled.div`
  display: flex;
  align-items: center;
`;

export const CareerIcon = styled(DiReact)`
  color: #fff;
  font-size: 2rem;
  @media (max-width:652px){
    font-size: 1.2rem;
  }
`;

export const CareerTitle = styled.h3`
  color: #fff;
  font-size: 1.8rem;

  @media (max-width:652px){
    font-size: 1.2rem;
  }
`;

export const CareerText = styled.p`
  max-width: 800px;
  font-size: 16px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 784px) {
    max-width: 670px;
    font-size: 16px;
    line-height: 32px;
    /* padding-bottom: 24px; */
  }

  @media (max-width: 652px) {
    font-size: 14px;
    line-height: 24px;
    /* padding-bottom: 16px; */
  }
`;

export const CareerSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 20px 0;
  
`;

export const CareerSkills = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  @media (max-width:652px){
    width: 40px;
  }
`;

export const SkillImgBox = styled.div`
  border-radius: 10px;
  width: 100%;
`;

export const SkillImg = styled.img`
  max-width: 100%;
`;

export const SkillName = styled.h3`
  color: #fff;
  padding: 10px;
  font-size: 16px;
`;
