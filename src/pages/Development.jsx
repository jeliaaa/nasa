import React from 'react'
import { Link } from 'react-router-dom'

const Development = () => {
  return (
    <div style={{backgroundColor:'#fff', width:'100%', height:'60dvh', display:'flex', justifyContent:'center', alignItems:'center', fontSize:35, textAlign:'center'}}>
        This Route is still in the stage of Development. <br />
        ERROR 404; <br />
        Thank you for Your patience - Nebula Team 
        <Link to={'/'}>MAIN</Link>
    </div>
  )
}

export default Development