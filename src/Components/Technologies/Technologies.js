import React from "react";
import Ecma from '../../images/tech skills/script.png'
import Html from '../../images/tech skills/html5-icon.png'
import CssImg from '../../images/tech skills/css3.png';
import JavascriptImg from '../../images/tech skills/javascript.png';
import ReactImg from '../../images/tech skills/react-icon.png';
import JsonImg from '../../images/tech skills/json-icon.png';
import JestImg from '../../images/tech skills/jest.png';
import BootstrapImg from '../../images/tech skills/bootstrap.png';
import NpmImg from '../../images/tech skills/npm.png';
import GitImg from '../../images/tech skills/git-icon.png';
import GithubImg from '../../images/tech skills/github.png';


import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../style/Global.styles";
import {
  CareerHead,
  CareerIcon,
  CareerSkills,
  CareerSkillsContainer,
  CareerText,
  CareerTitle,
  SkillImg,
  SkillImgBox,
  SkillName,
  TechBox,
} from "./Technologies.style";

function Technologies() {
  return (
    <Section id='technologies'>
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've Worked with a range of technologies in the web Development world.
        as Front-End Developer.
      </SectionText>

      <TechBox>
        <careerBox>
          <CareerHead>
            <CareerIcon />
            <CareerTitle>Front-End</CareerTitle>
          </CareerHead>

          <CareerText>2 years of experience in Front-End field</CareerText>

          <CareerSkillsContainer>
            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={Html} />
              </SkillImgBox>
              <SkillName>HTML</SkillName>
            </CareerSkills>

            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={CssImg} />
              </SkillImgBox>
              <SkillName>CSS</SkillName>
            </CareerSkills>
            
            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={JavascriptImg} />
              </SkillImgBox>
              <SkillName>JavaScript</SkillName>
            </CareerSkills>

            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={JsonImg} />
              </SkillImgBox>
              <SkillName>JSON</SkillName>
            </CareerSkills>
            
            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={BootstrapImg} />
              </SkillImgBox>
              <SkillName>Bootstrap</SkillName>
            </CareerSkills>

            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={GitImg} />
              </SkillImgBox>
              <SkillName>Git</SkillName>
            </CareerSkills>

            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={JestImg} />
              </SkillImgBox>
              <SkillName>Testing</SkillName>
            </CareerSkills>
            
            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={ReactImg} />
              </SkillImgBox>
              <SkillName>React</SkillName>
            </CareerSkills>
            
            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={Ecma} />
              </SkillImgBox>
              <SkillName>ECMAScript</SkillName>
            </CareerSkills>

            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={NpmImg} />
              </SkillImgBox>
              <SkillName>NPM</SkillName>
            </CareerSkills>

            <CareerSkills>
              <SkillImgBox>
                <SkillImg src={GithubImg}/>
              </SkillImgBox>
              <SkillName>github</SkillName>
            </CareerSkills>

          </CareerSkillsContainer>

        </careerBox>
      </TechBox>
    </Section>
  );
}

export default Technologies;
