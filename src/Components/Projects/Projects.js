import React from "react";
import { Section, SectionDivider, SectionTitle } from "../style/Global.styles";
import {
  ProjectBox,
  ProjectContent,
  ProjectImg,
  ProjectImgBox,
  ProjectLink,
  ProjectLinkBtn,
  ProjectName,
  ProjectSContainer,
  ProjectSkills,
  ProjectText,
  PSkill,
  YLine,
} from "./Project.style";
import { projectsData } from "./Data";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>

      <ProjectSContainer>
        {projectsData.map((item, index) => (
          <ProjectBox key={index}>
            <ProjectImgBox>
              <ProjectImg src={item.img} />
            </ProjectImgBox>

            <ProjectContent>
              <ProjectName>{item.name}</ProjectName>
              <YLine></YLine>
              <ProjectText>{item.text}</ProjectText>
              <ProjectSkills>
                {item.Skills.map((skill) => (
                  <PSkill>{skill}</PSkill>
                ))}
              </ProjectSkills>
              <ProjectLinkBtn >
                <ProjectLink href={item.Link} target="_blank">Visit</ProjectLink>
              </ProjectLinkBtn>
            </ProjectContent>
          </ProjectBox>
        ))}
      </ProjectSContainer>
    </Section>
  );
};

export default Projects;
