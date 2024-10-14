import React from 'react'

interface Props{
    params:{
        id:number,
    }
}


const UserIdPage = ({params : {id}}:Props) => {
  return (
    <div>UserIdPage {id}</div>
  )
}

export default UserIdPage