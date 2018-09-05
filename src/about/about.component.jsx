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
                        <p>Hard working web developer looking forward to build amazing tools. With a past in programming contests, I have a passion for solving problems of every kind. Javascript, Sass and PHP are my go to languages but I have experience in many others.  Open to learning new things everyday and improve myself in every way possible.</p>
                        <p>Bachelor in Computer Science from the Central University of Venezuela.</p>
                    </Reveal>
                    
                </div>
            </Element>
        );
    }
}