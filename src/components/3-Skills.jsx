import { FaHtml5,FaNodeJs, FaReact, FaGithub, FaGitAlt, FaGitkraken } from "react-icons/fa";
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
                        <div>
                            <FaHtml5 size={40}/>
                            <p>HTML</p>
                        </div>
                        
                        <div>
                            <IoLogoCss3 size={40}/>
                            <p>CSS</p>
                        </div>

                        <div>
                            <IoLogoJavascript size={40}/>
                            <p>JAVASCRIPT</p>
                        </div>

                        <div>
                            <FaReact size={40}/>
                            <p>REACT</p>
                        </div>
                    </div>
                </div>

                <div className='text-center  skills'>
                    <h3>{props.skills2}</h3>
                    <div className='skills-list'>
                        <div>
                            <FaNodeJs size={40}/>
                            <p>NODEJS</p>
                        </div>

                        <div>
                            <SiMysql size={40}/>
                            <p>MYSQL</p>
                        </div>
                        
                        <div>
                            <DiDjango size={40}/>
                            <p>DJANGO</p>
                        </div>

                        <div>
                            <SiNestjs size={40}/>
                            <p>NESTJS</p>
                        </div>
                    </div>
                </div>
                
                <div className='text-center skills'>
                    <h3>{props.skills3}</h3>
                    <div className='skills-list'>
                        <div>
                            <FaGitAlt size={40}/>
                            <p>GIT</p>
                        </div>
                        
                        <div>
                            <FaGithub size={40}/>
                            <p>GITHUB</p>
                        </div>

                        <div>
                            <FaGitkraken size={40}/>
                            <p>GITKRAKEN</p>
                        </div>

                        <div>
                            <VscVscode size={40}/>
                            <p>VSCODE</p>
                        </div>
                    </div>
                </div>

            </div>








        </section>
    )
}

export default Skills;