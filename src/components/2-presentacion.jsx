import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import '../css/2-Presentacion.css'

function Presentacion() {
    return (
        <>
                <div className="fondo-japon">
                    <h1>FrontEnd Developer</h1>
                    <h2>Hola soy Federico Ledesma</h2>
                    <aside>
                        <FaGithub className="iconos"/>
                        <FaSquareXTwitter className="iconos"/>
                        <FaLinkedin className="iconos"/>
                    </aside>
                </div>
        </>
    )
}

export default Presentacion;