import React from 'react';
import {} from './education.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { Element } from 'react-scroll';
import EducationList from './educationList.component.jsx';
import data from './items.json';

export default class Education extends React.Component {
    render() {

        return (
            <Element className="section section-blue education" name="education">
                <div className="left-section">
                    <Reveal effect="animated slideInUp">
                        <h2>Education <span className="small">and academics</span></h2>
                        <i className="material-icons">school</i>
                    </Reveal>
                </div>
                <div className="right-section">
                    <Reveal effect="animated slideInUp">
                        <EducationList items={data} />
                    </Reveal>
                </div>
            </Element>
        );
    }
}