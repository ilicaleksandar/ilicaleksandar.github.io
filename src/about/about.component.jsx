import React from 'react';
import {} from './about.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { Element } from 'react-scroll';

export default class About extends React.Component {

    render() {
        return (
            <Element className="section section-white about" name="about">
                <div className="left-section">
                    <Reveal effect="animated slideInUp">
                        <h2>About</h2>
                        <img className="avatar" src={require('./avatar.jpg')} alt=""/>
                    </Reveal>
                </div>
                <div className="right-section">
                    <Reveal effect="animated slideInUp">
                        <p> A software development craftsman with 4+ years of experience in the high-tech manufacturing and Internet industries. A collaborative developer and engineer with experience and education in the software sides of technology who thrives on discovery and accelerating performance.

                            Areas of functional expertise:
                            • Performance Engineering and Measurement • Systems Architecture and Operations • Technical Troubleshooting and Debugging • Teamwork and Cross-­‐functional Communication • Programming in Java, JavaScript and Python </p>
                        <p>Master degree in Computer Science from the Faculty of Technical Sciences, University of Novi Sad.</p>
                    </Reveal>
                    
                </div>
            </Element>
        );
    }
}