import './projects.css'
import React from 'react';
import { Card } from 'antd';



const Projects = () => {
    return (
        <section id="Projects" >
            <h1 className="projects">Projects</h1>
            <div className='title'>
                <Card className="card" bordered={false} style={{ width: 300 }} size='default'>
                    <a href='https://github.com/PEmbarach/coffeeie' target='_blank' rel="noopener noreferrer">
                        <h2 className='name'>Coffeeie</h2>
                        <img src='./image/coffeeie.png' alt='coffeeie' />
                    </a>
                </Card>
                <Card className="card" bordered={false} style={{ width: 300 }}>
                    <a href='https://github.com/PEmbarach/coffeeie' target='_blank' rel="noopener noreferrer">
                        <h2 className='name'>Coffeeie</h2>
                        <img src='./image/coffeeie.png' alt='coffeeie' />
                    </a>
                </Card>
                <Card className="card" bordered={false} style={{ width: 300 }}>
                    <a href='https://github.com/PEmbarach/coffeeie' target='_blank' rel="noopener noreferrer">
                        <h2 className='name'>Coffeeie</h2>
                        <img src='./image/coffeeie.png' alt='coffeeie' />
                    </a>
                </Card>
            </div>
        </section>
    )
}

export default Projects