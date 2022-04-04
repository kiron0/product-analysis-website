import React, { useEffect, useState } from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kiron0/blogsFakeData/main/data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blogs-container'>
            {
                blogs.map(blog => 
                <BlogDetails
                    key={blog.id}
                    blog={blog}
                >
                </BlogDetails>)
            }
        </div>
    );
};

export default Blogs;