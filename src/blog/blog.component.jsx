import React from 'react';
import {} from './blog.scss';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import { Element } from 'react-scroll';
import blogData from './blogs.json';
import BlogList from './blogList.component.jsx';

export default class Blog extends React.Component {

    render() {

        return (
            <Element className="section section-black experience" name="blog">
                <div className="left-section">
                    <Reveal effect="animated slideInUp">
                        <h2>Github pages</h2>
                        <i className="material-icons">pages</i>
                    </Reveal>
                </div>
                <div className="right-section">
                    <Reveal effect="animated slideInUp">
                        <BlogList blogs={blogData} />
                    </Reveal>
                </div>
            </Element>
        );
    }
}