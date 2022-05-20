import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
    const { username } = useParams()
    return <div>
        <div>{username}</div>
        <div><Link to="/">Go to search</Link></div>
    </div>
}

const User = () => {
    const { username } = useParams()
    const [name, setName] = useState([{}])
    useEffect(async () => {
        await axios(`https://api.github.com/users/${username}/repos`)
        .then((it) => {
            setName(it.data)
        })
        return () => {
            
        }
    }, [name])

    return <div>  
    <Header />
    {name.map(user => {  
      return <div key={user.id} style={{display: "flex"}}>  
        <div style={{width: '250px'}}>{user.name}</div>
      </div>  
    })}
    <div><Link to="/:username/:repositoryName">Go to repo</Link></div>
    </div>
}


export default User