import React from 'react'
import SwiperContainerProfile from './SwiperContainerProfile'
export default function ListContainer({heading,list}) {
  return (
    <div>
    <SwiperContainerProfile heading={heading} list={list}/>
    </div>
  )
}
