import React from 'react'

interface Props{
    params:{
        slugFolder:String[]
    }
}

const Productpage = ({params:{slugFolder}}: Props) => {
  return (
    <div>Productpage{slugFolder}</div>
  )
}

export default Productpage