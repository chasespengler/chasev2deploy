import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    background: linear-gradient(90deg, white 0%, #113137 30%);

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    &:hover {
        transition: all 0.5s ease-in-out;
        opacity: 100%;
    }

    &:not(:hover) {
        transition: all 0.5s ease-in-out;
        opacity: 30%;
    }

    // make opacity 100% on page load and then fade out to ~30%
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100vw;
    padding: 0 25px;

`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 0.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
    margin-left: 0px;

    @media screen and (max-width: 480px) {
        font-size: .9rem;
        max-width: .24rvw;
    }
`;

export const NavImg = styled.img`
    max-height: 70px;
    height: auto;

`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 0px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinksS = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #0a80ff;
    }

    &:hover {
        color: rgb(98, 140, 175);
        transition: 0.2s ease-in-out;
    }
`;

export const NavLinksR = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #0a80ff;
    }

    &:hover {
        color: rgb(98, 140, 175);
        transition: 0.2s ease-in-out;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: rgb(98, 140, 175);
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`