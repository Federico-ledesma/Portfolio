import '../css/5-Contact.css'

function Contact(props) {
    return(
        <div id='Contact' className='form d-flex justify-content-center align-items-center flex-column container-formulario'>
            <h2  className="contact-title">{props.titleContact}</h2>
            
            <form  className="d-flex justify-content-center flex-column align-items-center gap-5 form-container">
                <div className='input-container'>
                    <label> {props.label1} </label>
                    <input type="text" className='input' placeholder="John Doe" id="nombre" />    
                </div>

                <div className='input-container'>
                    <label> {props.label2} </label>
                    <input type="text" className='input' placeholder="JohnDoe@gmail.com" id="" />
                </div>

    
                <div className='input-container'>
                    <label> {props.label3} </label>
                    <input type="text" className='input' placeholder={props.place} id="" />
                </div>                
            </form>
        </div>
    )
}

export default Contact;