import React from 'react';
import './BlogDetails.css'

const BlogDetails = (props) => {
    const { title, imageURL, blog, admin } = props.blog;
    return (
        <div className='blog-container'>
            <img src={imageURL} alt="" />
            <h3>{title}</h3>
            <p>{admin}</p>
            <p>{blog.slice(0, 500)}</p>
        </div>
    );
};

export default BlogDetails;