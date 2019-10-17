import React from 'react';
import {} from './contact.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { Element } from 'react-scroll';

export default class Education extends React.Component {
    constructor () {
        super();

        this.state = {
            lastCommit: {}
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/ilicaleksandar/ilicaleksandar.github.io/commits')
            .then(res => res.json())
            .then(jsonData => {
                let lastCommit = {
                    sha: jsonData[0].sha.substr(0,7),
                    date: jsonData[0].commit.committer.date,
                    url: jsonData[0].html_url
                };
                this.setState({ lastCommit });
            });
    }

    render() {

        return (
            <Element className="section section-black contact" name="contact">
                <div className="left-section">
                    <Reveal effect="animated slideInUp">
                        <h2>Aleksandar Ilic</h2>
                        <img className="avatar" src={require('./avatar.jpg')} alt=""/>
                    </Reveal>
                </div>
                <div className="right-section">
                    <Reveal effect="animated slideInUp">

                        <a href="https://www.linkedin.com/in/aleksandar-ilić-a9b30b87/" target="_blank">
                            <img src={require('../header/linkedin.png')} alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com/acailic" target="_blank">
                            <img src={require('../header/github.png')} alt="Github"/>
                        </a>
                        <a href="https://resume.creddle.io/resume/5yd021417fr" className="pdf-download" download="IlicAleksandar.pdf">
                            <i className="material-icons">file_download</i>
                        </a>
                    </Reveal>
                    <Reveal effect="animated slideInUp">
                        <p> A software development craftsman with 4+ years of experience in the high-tech manufacturing and Internet industries. A collaborative developer and engineer with experience and education in the software sides of technology who thrives on discovery and accelerating performance.

                           </p>
                        <p>Master degree in Computer Science from the Faculty of Technical Sciences, University of Novi Sad.</p>
                    </Reveal>
                </div>
            </Element>
        );
    }
}