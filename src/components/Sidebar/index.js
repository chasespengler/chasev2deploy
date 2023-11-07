import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SideBtnWrap,
    SidebarWrapper
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>
                    Projects
                </SidebarLink>
                <SidebarLink to="blog" onClick={toggle}>
                    Blog
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contact" onClick={toggle}>
                    Contact
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar