import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Home = () => {
  const [counter, setCounterNew] = useState(0)

  return (
    <div>
      <Head title="Dashboard" />
      <img alt="wave" src="images/wave.jpg" />
      <Link to="/">Go To Dummy</Link>
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div> Hello World Dashboard {counter} </div>
      <div>
        <a href="/">Go To duuMMMy</a>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
