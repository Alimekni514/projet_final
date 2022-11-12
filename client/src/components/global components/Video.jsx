import React from 'react'

import ReactPlayer from 'react-player'
import crown from '../../img/crown.jpg'
import crownn from '../../img/crown.mp4'

import { Player } from 'video-react';
export default  function Video() {
  return (
    <div>
 <Player
      muted
      playsInline
      poster={crown}
      src={crownn}
    />
    </div>
 
  )
}
