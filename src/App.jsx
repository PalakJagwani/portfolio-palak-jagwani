import {Footer, Intro, Projects, Skills} from './Components/index'

function App() {

  return (
    <div className="md:pt-20 pt-6 md:px-24 px-2 pb-4">
      <Intro />
      <Skills />
      <hr className=' border-2 border-dark_pastel'/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
