import React from 'react'
import { Swiper,SwiperSlide} from 'swiper/react';

import MediaContainer from './homepage/MediaContainer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
export default function SwiperContainer({heading,list}) {
  return (
    
      <div className='toprated'>
        <h1 className='heading'>{heading}</h1>
        <div className='swiper-container'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={7}
            navigation>
            {

list &&
list.map(movie =>
  <SwiperSlide key={movie.id}> <MediaContainer title={movie.title} rate={movie.vote_average} desc={movie.overview} img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} id={movie.id}/></SwiperSlide>
)

}
          </Swiper>
        </div>
        </div>
    
  )
}
