
function Footer(props) {
    return(
        <footer className="text-center py-1 text-light bg-dark ">
            <p>{props.derechos}</p>
            <p>
              {props.hecho} <a href="https://github.com/Federico-ledesma" target="_blank" className="underline hover:text-gray-700">GitHub</a> · <a href="mailto:tuemail@example.com" className="underline hover:text-gray-700">Contacto</a>
            </p>
        </footer>
    )
}

export default Footer;