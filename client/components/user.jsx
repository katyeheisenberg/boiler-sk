import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
    const { username } = useParams()
    return <div className="grid justify-items-stretch">
        <div className="justify-self-center text-white font-mono font-bold text-2xl tracking-wide">{username}</div>
        <div className="justify-self-center text-emerald-200 font-mono font-bold text-xl tracking-tighter"><Link to="/">Go to search</Link></div>
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
    return <div className="bg-gradient-to-tr from-green-500 to-teal-800 w-full h-full grid justify-items-center">
        <div>
          <Header />
        </div>  
        <div className="bg-gradient-to-br from-green-500 to-teal-800 w-full h-full justify-self-center rounded-lg border border-green-100 py-2 px-2">
        <div>
          {name.map(user => {  
            return <div key={user.id}>  
                <div className="text-white font-mono font-bold">
                  {user.name}
                </div>
                <div className="font-mono font-bold text-green-900">
                 Repository URL:<Link to={`/${username}/${user.name}`} className="text-green-200">{user.html_url}</Link>
                </div>
           </div>})}
        </div>
        </div>
    </div>
}


export default User