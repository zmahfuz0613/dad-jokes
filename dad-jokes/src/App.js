import React, { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"




function App() {

  const [dadJoke, updateDadJoke] = useState({})

  const callApi = async () => {
    const result = await axios({
      baseURL: 'https://icanhazdadjoke.com',
      headers: {
        Accept: "application/json"
      }

    })
    updateDadJoke(result.data)
  }

  useEffect(() => {
    callApi()
  }, [])
  function randomJokes() {
  
    
  }
  
  return (
    <>
      <div>
        <h1>{dadJoke.joke}</h1>
        <button onClick={() => updateDadJoke(dadJoke)}>New Joke</button>
      </div>
    </>

  )
}

export default App