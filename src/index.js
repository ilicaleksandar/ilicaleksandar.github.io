import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/globals.scss';
import { StickyContainer } from 'react-sticky';

import Blog from './blog/blog.component.jsx';
import Experience from './exp/experience.component.jsx';
import Skills from './skills/skills.component.jsx';
import Contact from './contact/contact.component.jsx';

ReactDOM.render(
    <StickyContainer>
        <Contact/>
        <Experience/>
        <Skills/>
    </StickyContainer>, document.getElementById('root'));