import '../css/6-AboutMe.css'
import avatar from '../images/avatar.webp';

function AboutMe(props) {
    return(
        <section id='AboutMe' className='container-about-me'>
            <h2  className='title-about'>{props.titleAboutMe}</h2>
            
            

            <div className='container-about'>
                <div className='container-about-text'>
                    <h3 className='about-title'>{props.titlePresentation}</h3>
                    <p className='about-parrafo'>{props.parraphAboutMe}</p>
                    <ul className='text-about'>
                        <li>{props.list1}</li>
                        <li>{props.list2}</li>
                        <li>{props.list3}</li>
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