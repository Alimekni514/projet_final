import React ,{useContext}from 'react'
import { Navbar} from '../components/global components/index'
import { SwiperContainer } from '../components/homepage/index'
import SearchContext from '../contexts/SearchContext'
export default function Filtres() {
  const {search}=useContext(SearchContext)
  return (
    <div>
      <Navbar/>
      <SwiperContainer heading={'top results'} list={search}/>
    </div>
  )
}
