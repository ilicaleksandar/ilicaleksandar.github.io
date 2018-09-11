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
                        <p> Full stack software engineer. Primary backend development. Java as a main language, Android fan with all-round knowledge.
                           Experienced in working in multicultural teams – projects and presentations made during work on Improve Digital project (at Levi9) which included constant interaction with part of team based in Ukraine and client based in Netherlands and UK. Cooperative and open-minded. Open to learning new things everyday and improve myself in every way possible.</p>
                        <p>Master in Computer Science from the Faculty of Technical Sciences, University of Novi Sad.</p>
                    </Reveal>
                    
                </div>
            </Element>
        );
    }
}