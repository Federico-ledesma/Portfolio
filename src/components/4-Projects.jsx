import '../css/4-Projects.css'

function Projects({image1, image2, image3, ids}) {
    return (
            
          <div id={ids} className="carousel slide hola" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="0">
                  <img src={image1} className="d-block w-100 chau" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="0">
                  <img src={image2} className="d-block w-100 chau" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={image3} className="d-block w-100 chau" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#${ids}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#${ids}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>




           
            
          
     
    )
    
}

export default Projects