import React from "react"
import Joke from "./Joke"
import JokeData from "./JokeData"

function App() {
  const jokeElement = JokeData.map(joke => {
    return <Joke setup = {joke.setup} punchline = {joke.punchline}/>
  })
    return (
      <div>
        {jokeElement}
      </div>
    )
}

export default App