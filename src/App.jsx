import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyButton} from './MyButton'
import { ShowingImages } from './ShowingImages'
import spaceImg1 from "./assets/images/spaceImg1.jpg";
import spaceImg2 from "./assets/images/spaceImg2.jpg";
import spaceImg3 from "./assets/images/spaceImg3.jpg";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="button">
        <h3>Press the Button</h3>
        <MyButton />
      </div>
      <div className="images">
        <div className="img1">
          {ShowingImages(spaceImg1)};
        </div>
        <div className="img2">
        {ShowingImages(spaceImg2)};
        </div>
        <div className="img3">
        {ShowingImages(spaceImg3)};
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
