import React from "react";
import {
  CloseIcon,
  MobileIcon,
  Nav,
  NavIcon,
  NavItems,
  NavLink,
  NavLogo,
  NavMenu,
  SocialItem,
  SocialLink,
  SocialLinks,
} from "./Navbar.style";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLogo to="/">
        <NavIcon />
        M.ShawQi
      </NavLogo>

      <MobileIcon onClick={toggle}>
        <CloseIcon />
      </MobileIcon>

      <NavMenu>
        <NavItems>
          <NavLink
            to="technologies"
            smooth={true}
            duration={500}
            // spy={true}
            exact={true}
          >
            Technologies
          </NavLink>
        </NavItems>

        <NavItems>
          <NavLink
            to="about"
            smooth={true}
            duration={500}
            // spy={true}
            exact={true}
          >
            About
          </NavLink>
        </NavItems>

        <NavItems>
          <NavLink
            to="projects"
            smooth={true}
            duration={500}
            // spy={true}
            exact={true}
          >
            Projects
          </NavLink>
        </NavItems>
      </NavMenu>

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
      
    </Nav>
  );
};

export default Navbar;
