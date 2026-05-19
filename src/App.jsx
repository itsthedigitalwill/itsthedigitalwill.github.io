import './App.css'
import portpic from './assets/portpic.png'

function App() {

  return (
    <div className="page">

      <div className="card">
      <div className="folder-tab"></div>

      <div className="header">

      <div className='imgP'>
        <img className="mainimg" src={portpic} alt="" />
      </div>

      <h1 className="name">
        Hi, I'm Queniya Williams
      </h1>

      </div>

        <span className='description-title'>
            Full Stack developer
        </span>

        <p className="description">
          Computer Science Graduate • Cum Laude
        </p>

        <div className="button-container">

          <a
            href="https://www.linkedin.com/in/queniya-williams-b3b89227a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">LinkedIn</button>
          </a>

          <a
            href="https://github.com/itsthedigitalwill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">GitHub</button>
          </a>

        </div>

        <p className="note">
          <i>
            This website is currently under development! Full portfolio and
            project showcase coming soon!
          </i>
        </p>

      </div>

    </div>
  )
}

export default App