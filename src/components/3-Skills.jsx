import '../css/3-Skills.css'

function Skills() {
    return(
        <section id='Skills'>
            
            <h2 className="skills-title">My Skills</h2>
            
            <div className="skills-container">

                <div className='skills'>
                    <h3>Frontend Developer</h3>
                    <ul className='skills-list'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACTJS</li>
                    </ul>
                </div>

                <div className='skills'>
                    <h3>Backend Developer</h3>
                    <ul className='skills-list'>
                        <li>NODEJS</li>
                        <li>MYSQL</li>
                        <li>DJANGO</li>
                        <li>NESTJS</li>
                    </ul>
                </div>
                

            </div>

            <div className="skills-container">
                <div className='skills'>
                    <h3>DevTools</h3>
                    <ul className='skills-list'>
                        <li>GIT</li>
                        <li>GITHUB</li>
                        <li>FIGMA</li>
                        <li>VSCODE</li>
                    </ul>
                </div>
            </div>








        </section>
    )
}

export default Skills;