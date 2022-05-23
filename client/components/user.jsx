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
    // const [repName, getName] = useState([{}])
    // const repoN = name.map((it) => it.name)
    // getName(repoN)
    // const onClick = () => {
    //     props.addRepo(repName)
    //   }

    return <div>  
    <Header />
    {name.map(user => {  
      return <div key={user.id} style={{display: "flex"}}>  
        <div style={{width: '250px'}}>
          {user.name}
          <Link to={`/${username}/${user.name}`}>{user.html_url}</Link>
          </div>
      </div>  
    })}
    </div>
}


export default User