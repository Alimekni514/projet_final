import React ,{useContext}from 'react'
import { Navbar} from '../components/global components/index'
import { SwiperContainer } from '../components/homepage/index'
import SearchContext from '../contexts/SearchContext'
import ResearchContext from '../contexts/ResearchContext'
export default function Filtres() {
  const {search}=useContext(SearchContext)
  const {research}=useContext(ResearchContext)
  return (
    <div>
      <Navbar/>
      <SwiperContainer heading={'Movie'} list={search}/>
      <SwiperContainer heading={'Tv Shows'} list={research}/>
    </div>
  )
}
