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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla nisl enim, laoreet feugiat velit sed,
                            feugiat fringilla orci. Cras pellentesque diam posuere,
                            ultricies turpis a, fermentum velit. Cras id arcu sapien.
                            Etiam mattis ex at massa aliquam pretium.
                        </p>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <h2>React</h2>
                        <img src='/image/react.png' alt='logo react' className='image' />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla nisl enim, laoreet feugiat velit sed,
                            feugiat fringilla orci. Cras pellentesque diam posuere,
                            ultricies turpis a, fermentum velit. Cras id arcu sapien.
                            Etiam mattis ex at massa aliquam pretium.
                        </p>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <h2>Python</h2>
                        <img src='/image/python.png' alt='logo python' className='image' />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla nisl enim, laoreet feugiat velit sed,
                            feugiat fringilla orci. Cras pellentesque diam posuere,
                            ultricies turpis a, fermentum velit. Cras id arcu sapien.
                            Etiam mattis ex at massa aliquam pretium.
                        </p>
                    </h3>
                </div>
            </Carousel>
        </section >
    )
}

export default Skills