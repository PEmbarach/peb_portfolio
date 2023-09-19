import './skills.css'

const Skills = () => {
    return (
        <section >
            <h1 className="title">skills</h1>
            <div className="skills">
                <div className='js'>
                    <h2>JavaScript</h2>
                    <img src='/image/js.png' alt='logo javascript' />
                </div>
                <div className='react'>
                    <h2>React</h2>
                    <img src='/image/react.png' alt='logo react' />
                </div>
                <div className='python'>
                    <h2>Python</h2>
                    <img src='/image/python.png' alt='logo python' />
                </div>
            </div>
        </section>
    )
}

export default Skills