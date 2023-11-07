import React from 'react'
import { useParams } from 'react-router'
import dater from '../../dater/dater.json'

export default function ProjectSpecificPage () {
    const {id} = useParams();
    const project = dater['projects'][id-1];
    return (
        <>HI {id} {project.summary}</>
    )
}