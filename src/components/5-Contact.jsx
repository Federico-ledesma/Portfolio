import '../css/5-Contact.css'

function Contact() {
    return(
        <div className='form d-flex justify-content-center align-items-center flex-column'>
            <h2 id='Contact' className="skills-title">Contact Me</h2>
            
            <form className="d-flex justify-content-center flex-column align-items-center gap-5">
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