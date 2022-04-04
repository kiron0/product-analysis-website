import React from 'react';
import Footer from '../Footer/Footer';
import './Blogs.css'

const Blogs = () => {
    return (
        <>
        <div className='blogs'>
            <div className='blogs-info'>
            <h2>Frequently Asked Questions</h2>
            <h4>* What is Context API?</h4>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                    </p>
            <h4>* What is Semantic Tags?</h4>
                <p>
                    <strong><u>Props</u></strong><br />
                    1. Props are read-only. <br />
                    2. Props are immutable. <br />
                    3. Props can be accessed by the child component. <br />
                    4. Props are used to communicate between components. <br />
                    5. Props make components reusable.
                </p>
            <h4>* What is the difference between inline and inline-block element?</h4>
                <p>useState is a React Hook that allows you to have state variables in functional components. You have to pass the initial state to this function and it returns a variable with the current state value and another function to update this value.
                </p>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Blogs;