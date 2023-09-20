import './skills.css'
import { Card } from 'antd';

const Skills = () => {
    return (
        <section >
            <h1 className="skills">skills</h1>
            <div className="title">
                <Card className="card" bordered={false} style={{ width: 300 }}>
                    <h2>JavaScript</h2>
                    <img src='/image/js.png' alt='logo react' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla nisl enim, laoreet feugiat velit sed,
                        feugiat fringilla orci. Cras pellentesque diam posuere,
                        ultricies turpis a, fermentum velit. Cras id arcu sapien.
                        Etiam mattis ex at massa aliquam pretium.
                    </p>
                </Card>
                <Card className="card" bordered={false} style={{ width: 300 }}>
                    <h2>React</h2>
                    <img src='/image/react.png' alt='logo react' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla nisl enim, laoreet feugiat velit sed,
                        feugiat fringilla orci. Cras pellentesque diam posuere,
                        ultricies turpis a, fermentum velit. Cras id arcu sapien.
                        Etiam mattis ex at massa aliquam pretium.
                    </p>
                </Card>
                <Card className="card" bordered={false} style={{ width: 300 }}>
                    <h2>Python</h2>
                    <img src='/image/python.png' alt='logo react' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla nisl enim, laoreet feugiat velit sed,
                        feugiat fringilla orci. Cras pellentesque diam posuere,
                        ultricies turpis a, fermentum velit. Cras id arcu sapien.
                        Etiam mattis ex at massa aliquam pretium.
                    </p>
                </Card>
            </div>
        </section>
    )
}

export default Skills