import React from 'react';
import {} from './header.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link } from 'react-scroll';

export default class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="contact-info">
                    <a href="mailto:alexilic92@gmail.com">alexilic92@gmail.com</a>
                    <a href="https://resume.creddle.io/resume/5yd021417fr" className="pdf-download" download="AleksandarIlic.pdf">Download PDF</a>
                </div>
                <Reveal effect="animated fadeInUp" className="header-container">
                    <div className="left-section">
                        <Reveal effect="animated slideInUp">
                            <h2>About</h2>
                            <img className="avatar" src={require('./avatar.jpg')} alt=""/>
                        </Reveal>
                    </div>

                <div className="right-section">

                        <a href="mailto:alexilic92@gmail.com" className="mail">
                            alexilic92@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/aleksandar-ilić-a9b30b87/" target="_blank">
                            <img src={require('../header/linkedin.png')} alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com/acailic" target="_blank">
                            <img src={require('../header/github.png')} alt="Github"/>
                        </a>
                        <a href="https://resume.creddle.io/resume/5yd021417fr" className="pdf-download" download="IlicAleksandar.pdf">
                            <i className="material-icons">file_download</i>
                        </a>
                </div>
                </Reveal>
                <Sticky className="sticky" stickyClassName="sticked">
                    <div className="nav">
                        <h2>Ilic Aleksandar <span className="light">(acailic)</span></h2>
                        <ul className="nav-links">
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-50}>About</Link>
                            </li>
                            <li>
                                <Link to="contact" spy={true} smooth={true} offset={-50}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </Sticky>
            </div>
        );
    }
}