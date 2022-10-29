import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Errors() {
  const navigate=useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/SignIn')
    },2000)
  })
  return (
    <div> 
      <h1>vous n'etes  pas connecté</h1>
       
    </div>
  )
}
