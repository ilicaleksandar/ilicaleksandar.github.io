import React from 'react';
import {} from './blogList.scss';

export default class BlogList extends React.Component {
    render() {
        const blogItems = this.props.blogs.map((blog, index) => {
            return (
                <li key={index} className="blog">
                    <h2>{blog.title}  </h2>

                    <h3>{blog.link && <a href={blog.link}><i className="material-icons">open_in_new</i></a>}
                    </h3>
                    <h5>{blog.description}</h5>
                </li>
            );
        });
        return (
            <ul className="blog-list">
                {blogItems}
            </ul>
        );
    }
}

BlogList.propTypes = {
    blogs: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            link: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired
        })
    )
};