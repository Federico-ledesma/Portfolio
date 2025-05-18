import '../css/5-Contact.css'

function Contact() {
    return(
        <div id='Contact' className='form d-flex justify-content-center align-items-center flex-column container-formulario'>
            <h2  className="contact-title">Contact Me</h2>
            
            <form className="d-flex justify-content-center flex-column align-items-center gap-5 form-container">
                <div>
                    <label htmlFor="nombre">Name: </label>
                    <input type="text" placeholder="John Doe" id="nombre" />    
                </div>

                <div>
                    <label htmlFor="">Email: </label>
                    <input type="text" placeholder="JohnDoe@gmail.com" id="" />
                </div>

    
                <div>
                    <label htmlFor="">Content: </label>
                    <input type="text" placeholder="Add some message here..." id="" />
                </div>                
            </form>
        </div>
    )
}

export default Contact;