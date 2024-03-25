import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyButton } from './MyButton'
import { Gallery } from './Gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
  */}
      <div className="button">
        <h3>Press the Button</h3>
        <MyButton />
      </div>
      <br />
      <div className="images">
        <div class="sectionImg">
        <h5>First Section</h5>
        <Gallery />
        </div>
        <div class="sectionImg">        
        <h5>Second Section</h5>
        <Gallery />
        </div>
      </div>
    </>
  )
}

export default App
