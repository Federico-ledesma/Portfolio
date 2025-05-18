import '../css/6-AboutMe.css'
import avatar from '../images/avatar.webp';

function AboutMe() {
    return(
        <section className='container-about-me'>
            <h2 className='title-about'>About Me</h2>

            <div className='container-about'>
                <div className='container-about-text'>
                    <h3>Hi! I'm Federico Ledesma</h3>
                    <p>
                        I'm a frontend developer with one year of experience building modern, functional, and accessible web interfaces. I specialize in React and enjoy turning ideas into polished, dynamic digital experiences. Over the past year, I've worked on projects ranging from reusable components to full-fledged applications, always focused on best practices, performance, and delivering an excellent user experience.
                    </p>
                    <ul className='text-about'>
                        <li>🧠 Un año de experiencia como desarrollador frontend enfocado en React.</li>
                        <li>🎯 Apasionado por crear interfaces limpias, accesibles y centradas en el usuario.</li>
                        <li>🛠️ Experiencia trabajando con componentes reutilizables y aplicaciones completas.</li>
                    </ul>
                </div>
                
                <div className='container-about-img'>
                    <img src={avatar} className='img-about'></img>
                </div>

            </div>
        </section>
    )
}

export default AboutMe;