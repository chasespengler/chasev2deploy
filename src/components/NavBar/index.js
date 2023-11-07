import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinksS,
    NavLinksR,
    NavBtn,
    NavBtnLink,
    NavImg,
} from './NavBarElements'

const NavBar = ({ toggle, isScroll, toggleNavButtonsType }) => {

    function handleClickOn(){
        toggleNavButtonsType(true);
    };

    function handleClickOff(){
        toggleNavButtonsType(false);
    };

    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavImg src={require("../../images/CS.png")} alt="logo" className="logo" id="nav-logo"/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        { isScroll ? 
                            <NavLinksS to='about'>
                                About
                            </NavLinksS> :
                            <NavLinksR to='/' onClick={handleClickOn}>
                                Home
                            </NavLinksR>
                        }
                    </NavItem>
                    <NavItem>
                        { isScroll ?
                            <NavLinksS to="projects">
                                Projects
                            </NavLinksS> :
                            <NavLinksR to="/projects">
                                Projects
                            </NavLinksR>
                        }
                    </NavItem>
                    <NavItem>
                        { isScroll ?
                            <NavLinksS to="blog">
                                Blog
                            </NavLinksS> :
                            <NavLinksR to="/blog">
                                Blog
                            </NavLinksR>
                        }
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin" onClick={handleClickOff}>
                        Contact
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
    )
}

export default NavBar