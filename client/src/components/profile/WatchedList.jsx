import React from 'react'
import SwiperWatchedList from './SwiperWatchedList'
export default function WatchedList({heading,list}) {
  return (
    <div>
    <SwiperWatchedList heading={heading} list={list}/>
    </div>
  )
}