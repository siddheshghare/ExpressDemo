import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{

    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  })

  return (
    <>
      <h1>hello</h1>
      <h2>Helllo</h2>
      <p>jokes:{jokes.length}</p>
      {
        jokes.map((jo,index)=>(
          <div key={index}>
            <h2>{jo.id}</h2>
            <p>{jo.title}</p>
            <p>{jo.content}</p>
          </div>

        ))
      }
    </>
  )
}

export default App
