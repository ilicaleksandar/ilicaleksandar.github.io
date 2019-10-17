import React from 'react';
import {} from './experience.scss';
import {} from './blog.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { Element } from 'react-scroll';
import jobData from './jobs.json';
import JobList from './jobList.component.jsx';
import blogData from './blogs.json';
import BlogList from './blogList.component.jsx';

export default class Experience extends React.Component {
    render() {

        return (
            <Element className="section section-black experience" name="experience">
                <div className="left-section">
                    <Reveal effect="animated slideInUp">
                        <h2>Github pages <i className="material-icons">pages</i> </h2>

                    </Reveal>
                    <Reveal effect="animated slideInUp">
                        <BlogList blogs={blogData} />
                    </Reveal>
                </div>
                <div className="right-section">
                    <Reveal effect="animated slideInUp">
                        <h2>Experience <i className="material-icons">business</i></h2>

                    </Reveal>
                    <Reveal effect="animated slideInUp">
                        <JobList jobs={jobData} />
                    </Reveal>
                </div>
            </Element>
        );
    }
}