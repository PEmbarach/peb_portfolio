import './skills.css'
import React from 'react';
import { Carousel } from 'antd';


const contentStyle = {
    lineHeight: '100px',
    textAlign: 'center',
    background: '#eae7dc',
};

const Skills = () => {
    return (
        <section id="Skills" >
            <h1 className="title">Skills</h1>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <h2>JavaScript</h2>
                        <img src='/image/js.png' alt='logo javascript' className='image' />
                        <p>
                            My knowledge in JavaScript covers from work with Functions and Objects,
                            how to manipulate the DOM, handling DOM Events, work with Forms,
                            Arrow Functions, Spread, rest and destructuring, also include how to work with Map,
                            filter and reduce. I worked with JQuery library , consuming API,
                            preview of how to work with Jest for testing.
                        </p>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <h2>React</h2>
                        <img src='/image/react.png' alt='logo react' className='image' />
                        <p>
                            In React, form the initial installation and configuration to create React project,
                            work with components, handle events, rendering list, forms, hooks like useState,
                            how to work with props, render lists with .map,
                            nested elements using children props, manipulate and transform arrays of objects,
                            filter items from an array, conditional rendering.
                            Also the best practices, how to keep my code clean and organised.
                        </p>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <h2>Python</h2>
                        <img src='/image/python.png' alt='logo python' className='image' />
                        <p>
                            Working with Python, I've learned about variables, specific data types,
                            operators, comparators, flow control, data structures, how to create functions,
                            classes, object oriented concepts.
                            Also how to use Django framework , create backend API's, using models,
                            serializer, permissions and authentication.
                            How to setup and connect my database (SQL) with the frontend.
                        </p>
                    </h3>
                </div>
            </Carousel>
        </section >
    )
}

export default Skills