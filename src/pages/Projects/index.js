import React, { useEffect } from 'react'
import dater from '../../dater/dater.json'
import { Row, Col } from 'react-bootstrap'
import {
    ProjectsContainer,
    ProjectBlock,
    ProjectPageCard,
    ProjectSummary,
    ProjectImg,
    ProjectTitle,
    ProjectLink,
} from './ProjectsElements'

// TODO: Add 'click-here' key/pair to dater and add a last sentence in the summary that changes from the home page to here
// eg 'Click here to view the project on github' with link to github vs 'Click here to view more' with link to project specific page


export default function ProjectsPage () {

    const projects = dater['projects']

    useEffect(() => {
        window.scrollTo(0, 0);
      });

    return (
        <ProjectsContainer style={{paddingBottom: '30px'}}>
            <Row style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}>
                <Col xs={12} xxl={6}>
                    <Row style={{paddingRight: '40px'}}>
                        {projects.map((project, index) => (
                            <Col xs={12} md={6}>
                                <ProjectPageCard style={{minHeight: '95%'}}>
                                    <ProjectImg src={require("../../images/"+project['img_src'])} className="card-img-top img-fluid" />
                                    <ProjectBlock>
                                        <ProjectTitle className={'card-title text-center'}>{project['title']}</ProjectTitle>
                                        <ProjectSummary>{project['summary']}</ProjectSummary>
                                        <ProjectLink href={project['link']} target='_blank' className={"stretched-link"}></ProjectLink>
                                        {/* <ProjectLink href={'/#/projects/project/'+project['id']} className={"stretched-link"}></ProjectLink> */}
                                    </ProjectBlock>
                                </ProjectPageCard>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </ProjectsContainer>
    )
}