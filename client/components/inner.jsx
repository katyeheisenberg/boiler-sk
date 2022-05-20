import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
    const { username } = useParams()
    return <div>
        <div>{username}</div>
        <div><Link to="/">Go to search</Link></div>
        <div><Link to="/:userName">Go to User</Link></div>
    </div>
}

const Inner = () => {
  const { username } = useParams()
  const { repositoryName } = useParams()
  const [file, readFile] = useState('')
  useEffect(async () => {
    await axios(`https://raw.githubusercontent.com/${username}/${repositoryName}/master/README.md`)
    .then((it) => {
        readFile(it.data)
    })
    return () => {

    }
  }, [file])
  return <div id="description">
    <Header />
    README
    {file}
  </div>
}

export default Inner