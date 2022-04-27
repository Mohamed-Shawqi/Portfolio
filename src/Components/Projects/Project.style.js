import styled from "styled-components";

export const ProjectSContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 100px;
`;

export const ProjectBox = styled.div`
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  display: flex;
  flex-direction: column;
`;

export const ProjectImgBox = styled.div`
  width: 100%;
  min-height: 250px;
`;

export const ProjectImg = styled.img`
  max-width: 100%;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 450px;
`;
export const ProjectName = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
`;

export const YLine = styled.div`
  width: 50px;
  height: 3px;
  border: 0;
  background: #d0bb57;
`;

export const ProjectText = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
`;

export const ProjectSkills = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const PSkill = styled.li`
  color: #d8bfbf;
  list-style: none;
  font-size: 1rem;
`;

export const ProjectLinkBtn = styled.div`
  width: 100px;
  padding: 0.8rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #801414;
  }
`;

export const ProjectLink = styled.a`
  color: #d4c0c0;
  font-size: 1.5rem;
  line-height: 1rem;
  text-decoration: none;
`;
