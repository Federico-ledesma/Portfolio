import './App.css'
import NavBar from './components/1-NavBar'
import Presentacion from './components/2-presentacion'
import Skills from './components/3-Skills'
import Projects from './components/4-Projects'
import Contact from './components/5-Contact'
import Footer from './components/6-Footer'

function App() {

  return (
    <>
      <NavBar/>
    

      <main className='bg-main'>
        <Presentacion />
        <Skills />
      
      
      <h2 id='Projects' className='w-100 text-center projects-title'>My Projects</h2>

        <section className='d-flex justify-content-center flex-column'>
          <article className='projects'>
            <Projects image1={"deku-1.webp"} image2={"deku-2.webp"} image3={"deku-3.jpeg"} ids={"deku"}/>
            <Projects image1={"goku-1.png"} image2={"goku-2.jpg"} image3={"goku-3.webp"} ids={"goku"}/>
            <Projects image1={"eren-1.jpg"} image2={"eren-2.webp"} image3={"eren-3.jpeg"} ids={"eren"}/>
          </article>
            
          <article>
            <Projects image1={"solo-1.jpg"} image2={"solo-2.jpeg"} image3={"solo-3.webp"} ids={"solo"}/>
            <Projects image1={"taiki-1.webp"} image2={"taiki-2.webp"} image3={"taiki-3.webp"} ids={"taiki"}/>
            <Projects image1={"tanjiro-1.avif"} image2={"tanjiro-2.webp"} image3={"tanjiro-3.avif"} ids={"tanjiro"}/>
          </article>
        </section>

        <Contact />


      </main>
      <Footer />



    </>
  )
}

export default App
