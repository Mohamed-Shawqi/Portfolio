import React from "react";
import { Section, SectionDivider, SectionTitle } from "../style/Global.styles";

import {
  BigBox,
  BigBoxContainer,
  BigBoxText,
  BigBoxTitle,
  CertificateIcon,
} from "./Accomplish.style";
import { AccomplishmentsData } from "./Data";

const Accomplishments = () => {
  return (
    <Section id="Accomplishments">
      <SectionDivider />
      <SectionTitle>Accomplishments</SectionTitle>

      <BigBoxContainer>
        <>
          {AccomplishmentsData.map((item, index) => (
            <BigBox key={index}>
              <BigBoxTitle>
                {item.name}
                <CertificateIcon />
              </BigBoxTitle>

              <BigBoxText>{item.text}</BigBoxText>
            </BigBox>
          ))}
        </>
      </BigBoxContainer>
    </Section>
  );
};

export default Accomplishments;
