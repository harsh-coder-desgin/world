import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes, setjokes] = useState([])
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/jokes`)
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // ⬅️ Don't forget this empty dependency array to avoid infinite requests

  return (
    <>
      <h1>Frontend code |youtube</h1>
      <p>jokes:{jokes.length}</p>
      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>

          </div>
        ))
      }       
    </>
  )
}

export default App
