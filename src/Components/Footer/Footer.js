import React from 'react'
import { SocialItem, SocialLink, SocialLinks } from '../Navbar/Navbar.style'
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer } from './Footer.style'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0127-424-1364">0127-424-1364</LinkItem>
          <LinkItem href="tel:0109-252-4425">0109-252-4425</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mohamedshawqi80@gmail.com">
            mohamedshawqi80@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Mohamed ShawQi © {new Date().getFullYear()}</Slogan>
        </CompanyContainer>

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
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
