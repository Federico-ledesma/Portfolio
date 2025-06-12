import './App.css'
import NavBar from './components/1-NavBar'
import Presentacion from './components/2-presentacion'
import Skills from './components/3-Skills'
import Projects from './components/4-Projects'
import Contact from './components/5-Contact'
import Footer from './components/6-Footer'
import AboutMe from './components/7-AboutMe'
import { useState } from 'react'
import translations from './translations'

import deku1 from './images/projects/deku-1.webp'
import deku2 from './images/projects/deku-2.webp'
import deku3 from './images/projects/deku-3.webp'

import eren1 from './images/projects/eren-1.webp'
import eren2 from './images/projects/eren-2.webp'
import eren3 from './images/projects/eren-3.webp'

import goku1 from './images/projects/goku-1.webp'
import goku2 from './images/projects/goku-2.webp'
import goku3 from './images/projects/goku-3.webp'

import solo1 from './images/projects/solo-1.webp'
import solo2 from './images/projects/solo-2.webp'
import solo3 from './images/projects/solo-3.webp'

import taiki1 from './images/projects/taiki-1.webp'
import taiki2 from './images/projects/taiki-2.webp'
import taiki3 from './images/projects/taiki-3.webp'

import tanjiro1 from './images/projects/tanjiro-1.webp'
import tanjiro2 from './images/projects/tanjiro-2.webp'
import tanjiro3 from './images/projects/tanjiro-3.webp'


function App() {

    const [language, setLanguage] = useState("es")

    const t = translations[language]

    const toggleLanguage = () => {
      setLanguage(prev => (prev === "es" ? "en" : "es"))
    }
  
  return (
    <>

      <NavBar 
        click={<button onClick={toggleLanguage}>{<img className='banderas'  src={t.bandera} alt={t.idioma} width={t.width}/>}</button>}
        nav1={t.nav1} 
        nav2={t.nav2} 
        nav3={t.nav3} 
        nav4={t.nav4}
      />
      <main className='bg-main'>

        <Presentacion 
          titleFront={t.titleFront}
          titlePresentation={t.titlePresentation}
        />

        <h2 id='Projects' className='w-100 text-center projects-title'>{t.titleProjects}</h2>
        <section className='d-flex justify-content-center flex-column'>
          
            <article className='projects'>
                <Projects image1={deku1} image2={deku2} image3={deku3} ids={"deku"}/>
                <Projects image1={eren1} image2={eren2} image3={eren3} ids={"eren"}/>
                <Projects image1={goku1} image2={goku2} image3={goku3} ids={"goku"}/>
            </article>
            
          <article>
            <Projects image1={solo1} image2={solo2} image3={solo3} ids={"solo"}/>
            <Projects image1={taiki1} image2={taiki2} image3={taiki3} ids={"taiki"}/>
            <Projects image1={tanjiro1} image2={tanjiro2} image3={tanjiro3} ids={"tanjiro"}/>
          </article>
        </section>


        <AboutMe 
          titleAboutMe={t.titleAboutMe}
          titlePresentation={t.titlePresentation}
          parraphAboutMe={t.parraphAboutMe}
          list1={t.list1}
          list2={t.list2}
          list3={t.list3}
        />
        

        
        <Skills 
          skills1={t.skills1}
          skills2={t.skills2}
          skills3={t.skills3}
        />
      
      


        <Contact 
          titleContact={t.titleContact}
          label1={t.label1}
          label2={t.label2}
          label3={t.label3}
          place={t.place}
        />

      </main>
      <Footer 
        derechos={t.derechos}
        hecho={t.hecho}
      />



    </>
  )
}

export default App
