import React from 'react'
import ReactPlayer from 'react-player'
import crown from '../../img/crown.jpg'
import crownn from '../../img/crown.mp4'
export default function Stream() {
  return (
    <div style={{boxShadow:' rgba(255, 255, 255, 0.2);'}}>
     <ReactPlayer
     width='70vw'
     height='70vh'
     controls
     url={crownn}
     />
    </div>
  )
}
