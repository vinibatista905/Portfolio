import React from 'react';
import { useTranslation } from "react-i18next";
import { ExperienceData } from '../../data/experience';
import ExperienceCard from './experience-card';
import Separator from '../../common/separator';
import './experience.scss';

function Experience() {
    const { t } = useTranslation();
    const data = ExperienceData;

    return (
        <div className='experience'>
            <Separator />
            <label className='section-title'>{t("sections.experience")}</label>
            <div className='experience-cards-container'>
                {data.map((experience) =>{
                    return <ExperienceCard key={experience.id} experience={experience} />
                })}
            </div>
        </div>
    )
}

export default Experience
