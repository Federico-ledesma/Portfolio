import { FaHtml5,FaNodeJs, FaReact, FaGithub, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5"
import { SiMysql, SiNestjs } from "react-icons/si"
import { DiDjango } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import '../css/3-Skills.css'

function Skills(props) {
    return(
        <section id='Skills'>
            
            
            
            <div className="skills-container">

                <div className='text-center skills'>
                    <h3>{props.skills1}</h3>
                    <div className='skills-list'>
                        <div className="icono-nombre">
                            <FaHtml5 className="icono" color="#f06b34" size={40}/>
                            <p className="icono-nombres" >HTML</p>
                        </div>
                        
                        <div className="icono-nombre">
                            <IoLogoCss3 className="icono" color="#2e54e5" size={40}/>
                            <p className="icono-nombres" >CSS</p>
                        </div>

                        <div className="icono-nombre">
                            <IoLogoJavascript className="icono" color="#f8e026" size={40}/>
                            <p className="icono-nombres" >JAVASCRIPT</p>
                        </div>

                        <div  className="icono-nombre">
                            <FaReact className="icono" color="#01ffff" size={40}/>
                            <p className="icono-nombres" >REACT</p>
                        </div>
                    </div>
                </div>

                <div className='text-center  skills'>
                    <h3>{props.skills2}</h3>
                    <div className='skills-list'>
                        <div className="icono-nombre">
                            <FaNodeJs className="icono" color="#83be0a" size={40}/>
                            <p className="icono-nombres" >NODEJS</p>
                        </div>

                        <div className="icono-nombre">
                            <SiMysql className="icono" color="#1b6997" size={40}/>
                            <p className="icono-nombres" >MYSQL</p>
                        </div>
                        
                        <div className="icono-nombre">
                            <DiDjango className="icono" color="#113527" size={40}/>
                            <p className="icono-nombres" >DJANGO</p>
                        </div>

                        <div className="icono-nombre">
                            <SiNestjs className="icono" color="#e12b54" size={40}/>
                            <p className="icono-nombres" >NESTJS</p>
                        </div>
                    </div>
                </div>
                
                <div className='text-center skills'>
                    <h3>{props.skills3}</h3>
                    <div className='skills-list'>
                        <div className="icono-nombre">
                            <FaGitAlt className="icono" color="#f05539" size={40}/>
                            <p className="icono-nombres" >GIT</p>
                        </div>
                        
                        <div className="icono-nombre">
                            <FaGithub className="icono" color="#080808" size={40}/>
                            <p className="icono-nombres" >GITHUB</p>
                        </div>

                        <div className="icono-nombre">
                            <FaBootstrap className="icono" color="#542690" size={40}/>
                            <p className="icono-nombres" >Bootstrap</p>
                        </div>

                        <div className="icono-nombre">
                            <VscVscode className="icono" color="#2cacf3" size={40}/>
                            <p className="icono-nombres" >VSCODE</p>
                        </div>
                    </div>
                </div>

            </div>








        </section>
    )
}

export default Skills;