import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const DropDownContainer = styled.div`
  background: #0f1624;
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr;
  transition: 0.3s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

export const MobileIcon = styled.div`
  grid-area: 1/1/2/2;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
`;

export const DropMenu = styled.ul`
  grid-area: 2/1/4/1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DropItem = styled.li`
  list-style: none;
`;

export const DropLink = styled(LinkS)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  font-size: 2rem;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const SocialLinks = styled.ul`
  grid-area: 5/1/6/1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SocialItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0 0 1px;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: 0.4s ease;

  &:hover {
    background-color: #212d45;
    transform: scale(1.3);
    cursor: pointer;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
`;
