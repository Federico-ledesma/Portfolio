import '../css/5-Contact.css'

function Contact() {
    return(
        <div id='Contact' className='form d-flex justify-content-center align-items-center flex-column container-formulario'>
            <h2  className="contact-title">Contact Me</h2>
            
            <form className="d-flex justify-content-center flex-column align-items-center gap-5 form-container">
                <div className='input-container'>
                    <label htmlFor="nombre" className='label-input'>Name: </label>
                    <input type="text" className='input' placeholder="John Doe" id="nombre" />    
                </div>

                <div className='input-container'>
                    <label htmlFor="" className='label-input'>Email: </label>
                    <input type="text" className='input' placeholder="JohnDoe@gmail.com" id="" />
                </div>

    
                <div className='input-container'>
                    <label htmlFor="" className='label-input'>Content: </label>
                    <input type="text" className='input' placeholder="Add some message here..." id="" />
                </div>                
            </form>
        </div>
    )
}

export default Contact;