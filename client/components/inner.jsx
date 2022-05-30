import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

const Header = () => {
  const { username } = useParams()
  return (
    <div className="grid justify-items-stretch">
      <div
        div
        className="justify-self-center text-white font-mono font-bold text-2xl tracking-wide"
      >
        {username}
      </div>
      <div className="justify-self-center text-emerald-200 font-mono font-bold text-xl tracking-tighter">
        <Link to="/">Go to search</Link>
      </div>
      <div className="justify-self-center text-emerald-200 font-mono font-bold text-xl tracking-tighter">
        <Link to={`/${username}`}>Go to User</Link>
      </div>
    </div>
  )
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
        readFile('Unfortunately, there is no Readme')
      })
    return () => {}
  }, [username, repositoryName])
  return (
    <div className="bg-gradient-to-tr from-green-500 to-teal-800 w-full h-full grid justify-items-center">
      <div>
        <Header />
      </div>
      <div className="font-mono font-semibold text-emerald-200 text-2xl border bg-emerald-700 rounded-lg border-emerald-200 justify-self-center py-2 px-2">
        Readme: {repositoryName}, user: {username}
      </div>
      <div className="font-mono font-extralight text-emerald-200 text-sm mx-2 ">
        <ReactMarkdown>{file}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Inner
