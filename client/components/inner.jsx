import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'




const Header = () => {
  const { username } = useParams()
  return <div>
      <div>{username}</div>
      <div><Link to="/">Go to search</Link></div>
      <div><Link to={`/${username}`}>Go to User</Link></div>
  </div>
}

const Inner = () => {
  const { username, repositoryName } = useParams()
  const [file, readFile] = useState('')
  useEffect(async () => {
    await axios(`https://raw.githubusercontent.com/${username}/${repositoryName}/master/README.md`)
    .then((it) => {
        readFile(it.data)
    })
    .catch(() => {
      readFile('README ISNT FOUND')
    })
    return () => {

    }
  }, [username, repositoryName])
  return <div>
    <Header />
    <div>
      README:
    </div>
    <div>
      <ReactMarkdown>
        {file}
      </ReactMarkdown>
    </div>
  </div>
}

export default Inner