import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import Styled from 'styled-components'
import {DiCssdeck} from 'react-icons/di'
import {FaBars} from 'react-icons/fa'


export const Nav = Styled.nav`
    padding: 10px;
    padding-top:20px;
    max-width:1300px;
    margin:auto;
    display: grid;
    align-items:center;
    grid-template-columns:repeat(5,1fr);
    grid-template-rows:1fr;
`;

export const NavLogo = Styled(LinkR)`
    max-width:160px;
    display: flex;
    align-items:center;
    color:#fff;
    text-decoration:none;
    font-size:1.2rem;
    cursor:pointer;
    grid-area: 1 / 1 / 2 / 2;
`;

export const NavIcon = Styled(DiCssdeck)`
    font-size:2rem;
    color: white;
    
    
`;

export const MobileIcon = Styled.div`
    display:none;

    @media (max-width:784px){
        color: :#fff;
        display: block;
        grid-area:1/6/1/6
    }
`;

export const CloseIcon = Styled(FaBars)`
    color: #fff;
    font-size:1.5rem;
    cursor: pointer;
`

export const NavMenu = Styled.ul`
    grid-area:1/2/1/4;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    list-style:none;

    @media (max-width:950px){
        grid-area:1/2/1/5
    }
    @media (max-width:784px){
        display:none;
    }
`
export const NavItems = Styled.li`

`

export const NavLink = Styled(LinkS)`
    text-decoration:none;
    color:rgba(255,255,255,0.75);
    font-size:1.3rem;
    transition: 0.4s ease;
    cursor: pointer;

    &:hover{
        color: #fff;
    }
`
export const SocialLinks = Styled.ul`
    grid-area: 1/5/2/6 ;
    display: flex;
    justify-content: space-between;
    list-style:none;
    align-items:center;

    @media (max-width:784px){
        display: none;
    }
`;

export const SocialItem = Styled.li`
    display: flex;
    align-items:center;
    justify-content:center;
    padding:5px 0 0 1px;
    color:#fff;
    width: 50px;
    height:50px;
    border-radius:50%;
    transition: 0.4s ease;

    &:hover {
    background-color: #212d45;
    transform: scale(1.3);
    cursor: pointer;
    }

`;

export const SocialLink = Styled.a`
    text-decoration:none;
    color:#fff;
    font-size:1.5rem;
    

`



