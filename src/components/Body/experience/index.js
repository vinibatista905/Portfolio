import React from 'react';
import { ExperienceData } from '../../data/experience';
import ExperienceCard from './experience-card';
import Separator from '../../common/separator';
import './experience.scss';

function Experience() {
    const data = ExperienceData;

    return (
        <div className='experience'>
            <Separator />
            <label className='section-title'>Experiência</label>
            <div>
                {data.map((experience, index) =>{
                    return <ExperienceCard index={index} experience={experience} />
                })}
            </div>
        </div>
    )
}

export default Experience
