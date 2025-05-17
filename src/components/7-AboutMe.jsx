import '../css/6-AboutMe.css'
import avatar from '../images/avatar.jpeg';

function AboutMe() {
    return(
        <section className='container-about-me'>
            <h2 className='title-about'>Sobre Mi</h2>

            <div className='container-about'>
                <div className='container-about-text'>
                    <h3>¡Hola! Soy Federico Ledesma</h3>
                    <p>
                        Soy desarrollador frontend con un año de experiencia creando interfaces web modernas, funcionales y accesibles. Me especializo en React y disfruto transformar ideas en experiencias digitales pulidas y dinámicas. Durante este año he trabajado en proyectos que abarcan desde componentes reutilizables hasta aplicaciones completas, siempre enfocado en buenas prácticas, rendimiento y una excelente experiencia de usuario.
                        <ul className='text-about'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </p>
                </div>
                
                <div className='container-about-img'>
                    <img src={avatar} className='img-about'></img>
                </div>

            </div>
        </section>
    )
}

export default AboutMe;