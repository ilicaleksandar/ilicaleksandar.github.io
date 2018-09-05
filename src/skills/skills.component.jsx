import React from 'react';
import {} from './skills.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { Element } from 'react-scroll';
import skillData from './skills.json';
import SkillList from './skillList.component.jsx';

export default class Skills extends React.Component {
    render() {
        return (
            <Element className="section section-white skills" name="skills">
                <div className="left-section">
                    <Reveal effect="animated slideInUp">
                        <h2>Skillset</h2>
                        <i className="material-icons">
                            build
                        </i>
                    </Reveal>
                </div>
                <div className="right-section">
                    <Reveal effect="animated slideInUp">
                        <SkillList skills={skillData} />
                    </Reveal>
                </div>
            </Element>
        );
    }
}