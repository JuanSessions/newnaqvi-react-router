import React from 'react'

export default function NewComponent(props) {
 console.log(props)
 let {match,state}= props
/*  
 let data= props.data
 let User=data.find(user=>user.name===username) */
 let User=state.find(user=>user.name===match.params.user)
 console.log(User)
    return (
        <div>
             <h1>{User.name}</h1>
            <h2> {User.username}</h2>
            <h3>{User.email}</h3> 
        </div>
    )
}
