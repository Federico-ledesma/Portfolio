
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import '../css/2-Presentacion.css'

function Presentacion(props) {

    

    return (
        <>
                <div className="fondo-japon">
                    <h1 className="presentacion">{props.titleFront}</h1>
                    <h2 className="presentacion">{props.titlePresentation}</h2>
                    <aside className="presentacion">
                        <FaGithub className="iconos"/>
                        <FaSquareXTwitter className="iconos"/>
                        <FaLinkedin className="iconos"/>
                    </aside>
                </div>
        </>
    )
}

export default Presentacion;