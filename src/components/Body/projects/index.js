import React from 'react';
import { ProjectData } from '../../data/projects';
import ProjectCard from './project-card';
import Separator from '../../common/separator';
import './projects.scss';

function Projects() {
    const data = ProjectData;

    return (
        <div className='projects'>
            <Separator />
            <label className='section-title'>Projetos Pessoais</label>
            <div>
                {data.map((project) =>{
                    return <ProjectCard project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects
