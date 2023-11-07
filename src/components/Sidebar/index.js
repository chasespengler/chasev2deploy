import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarLinkS,
    SidebarLinkR,
    SidebarMenu,
    SidebarRoute,
    SideBtnWrap,
    SidebarWrapper
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle, isScroll, toggleNavButtonsType }) => {

    function handleClickOn(){
        toggleNavButtonsType(true);
    };

    function handleClickOff(){
        toggleNavButtonsType(false);
    };

    function handleOtherClicks(){
        toggle();
        handleClickOff();
    }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                { isScroll ? 
                        <SidebarLinkS to='about' onClick={toggle}>
                            About
                        </SidebarLinkS> :
                        <SidebarLinkR to='/' onClick={handleClickOn}>
                            Home
                        </SidebarLinkR>
                    }
                <SidebarLinkR to="/projects" onClick={handleOtherClicks}>
                    Projects
                </SidebarLinkR>
                <SidebarLinkR to="/blog" onClick={handleOtherClicks}>
                    Blog 
                </SidebarLinkR>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contact" onClick={handleOtherClicks}>
                    Contact
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar