import React from 'react'
import SwiperContainer from '../SwiperContainer'
export default function ListContainer({heading,list}) {
  return (
    <div>
    <SwiperContainer heading={heading} list={list}/>
    </div>
  )
}
