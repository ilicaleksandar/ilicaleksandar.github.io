import React from 'react';
import {} from './jobList.scss';

export default class JobList extends React.Component {
    render() {
        const jobItems = this.props.jobs.map((job, index) => {
            return (
                <li key={index} className="job">
                    <h2>{job.title} {job.link && <a href={job.link}><i className="material-icons">open_in_new</i></a>}</h2>
                    <h4>{job.period}</h4>
                    <h3>{job.position}</h3>
                </li>
            );
        });
        return (
            <ul className="job-list">
                {jobItems}
            </ul>
        );
    }
}

JobList.propTypes = {
    jobs: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            position: React.PropTypes.string.isRequired,
            period: React.PropTypes.string.isRequired
        })
    )
};