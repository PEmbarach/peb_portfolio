import './projects.css'
import React from 'react';
import { Carousel } from 'antd';


const contentStyle = {
    lineHeight: '100px',
    textAlign: 'center',
    background: '#eae7dc',
};

const Projects = () => {
    return (
        <section className='projects'>
            <h1 className="title">projects</h1>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <a href='https://github.com/PEmbarach/coffeeie' target='_blank'>
                            <img className='image' src='./image/coffeeie.png'/>
                            Coffeeie
                        </a>
                    </h3>
                </div>
                <div>
                <h3 style={contentStyle}>
                        <a href='https://github.com/PEmbarach/coffeeie' target='_blank'>
                            <img className='image' src='./image/coffeeie.png'/>
                            Coffeeie
                        </a>
                    </h3>
                </div>
                <div>
                <h3 style={contentStyle}>
                        <a href='https://github.com/PEmbarach/coffeeie' target='_blank'>
                            <img className='image' src='./image/coffeeie.png'/>
                            Coffeeie
                        </a>
                    </h3>
                </div>
            </Carousel>
        </section>
    )
}

export default Projects