
import '../css/1-NavBar.css'
function NavBar(props) {

   

    return (
      <header id='NavBar'>
       
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Noxius Dev </a>
              
              <div className='container-banderas'>
                {props.click}
              </div>
              

              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                

              <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">

                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">NoxiusDev</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <div>{props.bandera}</div>
                        <li className="nav-item">
                        <a className="nav-link active text-center" aria-current="page" href="#NavBar">{props.nav1}</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link active text-center" href="#Projects">{props.nav2}</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link active text-center" href="#AboutMe">{props.nav3}</a>
                        </li>

                        <li className="nav-item">
                         <a className="nav-link active text-center" href="#Contact">{props.nav4}</a>
                        </li>

                    </ul>

                </div>
              </div>
            </div>
        </nav>
      </header>
    )
}

export default NavBar;