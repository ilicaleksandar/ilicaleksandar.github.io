import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/globals.scss';
import { StickyContainer } from 'react-sticky';

import Header from './header/header.component.jsx';
import About from './about/about.component.jsx';
import Experience from './exp/experience.component.jsx';
import Skills from './skills/skills.component.jsx';
import Education from './education/education.component.jsx';
import Contact from './contact/contact.component.jsx';

ReactDOM.render(
    <StickyContainer>
        <Header />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
    </StickyContainer>, document.getElementById('root'));