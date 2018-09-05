import React from 'react';
import {  } from './educationList.scss';

export default class EducationList extends React.Component {
    render() {
        const educationItems = this.props.items.map((item, index) => {
            return (
                <li key={index}>
                    <h4>{item.period}</h4>
                    <h2>{item.title}</h2>
                    <h3>{item.place}</h3>
                    {item.description && <p>{item.description}</p>}
                </li>
            );
        });

        return (
            <ul className="education-list">
                {educationItems}
            </ul>
        );
    }
}

EducationList.propTypes = {
    skills: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            period: React.PropTypes.string.isRequired,
            place: React.PropTypes.string.isRequired,
            description: React.PropTypes.string
        })
    )
};