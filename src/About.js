import React, { useState, useEffect } from 'react'
import {BrowserRouter,Route, Link } from 'react-router-dom'
import NewComponent from './NewComponent'

export default function About(props) {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    },[])
    return (
        <BrowserRouter> 
        <div>
            <h1>This is About Page</h1>
            <ul>
                
                    {users.map(user=>{
                        return(
                            <li key={user.id}>
                           <Link  to={`/about/${user.name}`} >{user.name}</Link>  
                           </li>
                        )
                    })}
                   
               
            </ul>
            <Route path="/about/:user" exact render={(props)=><NewComponent {...props} state={users} />}/> 
        </div>
        </BrowserRouter>
    )
}
