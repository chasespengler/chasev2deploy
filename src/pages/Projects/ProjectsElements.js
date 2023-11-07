import styled from 'styled-components'
import { Card } from 'react-bootstrap'

export const ProjectsContainer = styled.div`
    min-height: 85vh;
    height: 100%;
    margin-top: 0;
    background: linear-gradient(0deg, #113137 5%, #fff 100%);
`

export const ProjectPageCard = styled(Card)`
    cursor: pointer;
    position: relative;
    margin-left: 40px;
    margin-top: 40px;
`

export const ProjectImg = styled.img`
    max-height: 200px;
`

export const ProjectBlock = styled.div`
    overflow-x: wrap;
`

export const ProjectTitle = styled.h4`
    border-bottom: 1px solid grey;
    padding-bottom: 3px;
`

export const ProjectSummary = styled.p`
    width: 80%;
    margin-left: 10%;

`

export const ProjectLink = styled.a`

`
