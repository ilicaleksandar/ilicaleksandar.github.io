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
                    <a href="mailto:rjtm1992@gmail.com">rjtm1992@gmail.com</a>
                    <a href="/resume.pdf" className="pdf-download" download="RicardoMontero.pdf">Download PDF</a>
                </div>
                <Reveal effect="animated fadeInUp" className="header-container">
                    <h1><span className="light">Full-stack</span> Developer</h1>
                </Reveal>
                <Sticky className="sticky" stickyClassName="sticked">
                    <div className="nav">
                        <h2>Ricardo Montero <span className="light">(rjtm)</span></h2>
                        <ul className="nav-links">
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-50}>About</Link>
                            </li>
                            <li>
                                <Link to="experience" spy={true} smooth={true} offset={-50}>Experience</Link>
                            </li>
                            <li>
                                <Link to="skills" spy={true} smooth={true} offset={-50}>Skills</Link>
                            </li>
                            <li>
                                <Link to="education" spy={true} smooth={true} offset={-50}>Education</Link>
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