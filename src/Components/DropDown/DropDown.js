import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import {
  CloseIcon,
  DropDownContainer,
  DropItem,
  DropLink,
  DropMenu,
  MobileIcon,
  SocialItem,
  SocialLink,
  SocialLinks,
} from "./DropDown.style";

function DropDown({ toggle, isOpen }) {
  return (
    <DropDownContainer onClick={toggle} isOpen={isOpen}>
      <MobileIcon>
        <CloseIcon />
      </MobileIcon>

      <DropMenu>
        <DropItem>
          <DropLink
            to="technologies"
            smooth={true}
            duration={500}
            exact={true}
            onClick={toggle}
          >
            Technologies
          </DropLink>
        </DropItem>

        <DropItem>
          <DropLink
            to="about"
            smooth={true}
            duration={500}
            exact={true}
            onClick={toggle}
          >
            About
          </DropLink>
        </DropItem>

        <DropItem>
          <DropLink
            to="projects"
            smooth={true}
            duration={500}
            exact={true}
            onClick={toggle}
          >
            Projects
          </DropLink>
        </DropItem>
      </DropMenu>

      <SocialLinks>
        <SocialItem>
          <SocialLink
            href="https://www.linkedin.com/in/mohamed-shawqi-548a9b168/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink href="https://github.com/Mohamed-Shawqi" target="_blank">
            <FaGithub />
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink
            href="https://www.facebook.com/profile.php?id=100008945341080"
            target="_blank"
          >
            <FaFacebook />
          </SocialLink>
        </SocialItem>
      </SocialLinks>
    </DropDownContainer>
  );
}

export default DropDown;
