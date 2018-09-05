import React from 'react';
import { Line } from 'rc-progress';
import {} from './skillList.scss';

export default class SkillList extends React.Component {
    render() {
        const skillList = this.props.skills.map((skill, index) => {
            return (
                <li className="skill" key={index}>
                    <h2>
                        {skill.icon &&
                            <span className={"skill-icon rjtm-" + skill.icon}></span>
                        }
                         {skill.title}
                    </h2>
                    <Line percent={skill.percent} strokeColor="#1b64af" strokeWidth="2" trailWidth="2" strokeLinecap="square"/>
                    {skill.percent}%
                </li>
            )
        });

        return (
            <ul className="skill-list">
                {skillList}
            </ul>
        );
    }
}

SkillList.propTypes = {
    skills: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            percent: React.PropTypes.number.isRequired
        })
    )
};