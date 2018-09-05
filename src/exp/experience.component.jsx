import React from 'react';
import {} from './experience.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { Element } from 'react-scroll';
import jobData from './jobs.json';
import JobList from './jobList.component.jsx';

export default class Experience extends React.Component {
    render() {

        return (
            <Element className="section section-black experience" name="experience">
                <div className="left-section">
                    <Reveal effect="animated slideInUp">
                        <h2>Experience</h2>
                        <i className="material-icons">business</i>
                    </Reveal>
                </div>
                <div className="right-section">
                    <Reveal effect="animated slideInUp">
                        <JobList jobs={jobData} />
                    </Reveal>
                </div>
            </Element>
        );
    }
}