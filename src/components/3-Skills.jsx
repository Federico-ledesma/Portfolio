import { FaHtml5,FaNodeJs, FaReact, FaGithub, FaGitAlt, FaGitkraken } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5"
import { SiMysql, SiNestjs } from "react-icons/si"
import { DiDjango } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import '../css/3-Skills.css'

function Skills() {
    return(
        <section id='Skills'>
            
            
            
            <div className="skills-container">

                <div className='text-center skills'>
                    <h3>Frontend Developer</h3>
                    <div className='skills-list'>
                        <FaHtml5 size={40}/>
                        <IoLogoCss3 size={40}/>
                        <IoLogoJavascript size={40}/>
                        <FaReact size={40}/>
                    </div>
                </div>

                <div className='text-center  skills'>
                    <h3>Backend Developer</h3>
                    <div className='skills-list'>
                        <FaNodeJs size={40}/>
                        <SiMysql size={40}/>
                        <DiDjango size={40}/>
                        <SiNestjs size={40}/>
                    </div>
                </div>
                
                <div className='text-center skills'>
                    <h3>Dev Tools</h3>
                    <div className='skills-list'>
                        <FaGitAlt size={40}/>
                        <FaGithub size={40}/>
                        <FaGitkraken size={40}/>
                        <VscVscode size={40}/>
                    </div>
                </div>

            </div>








        </section>
    )
}

export default Skills;