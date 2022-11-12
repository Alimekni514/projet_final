import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Container from '../global components/Container';
import { MediaContainer} from '../global components/index'
import { useContext } from 'react';
import userContext from '../../contexts/UserContext';
export default function SwiperContainer({ heading, list }) {
  const { user } = useContext(userContext)
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
              <SwiperSlide key={movie.id}>
                {
                  !user ? <Container title={movie.title} rate={movie.vote_average} tvname={movie.name} desc={movie.overview} id={movie.id} img={`https://image.tmdb.org/t/p/original/${movie.poster_path} `} />: 
                <MediaContainer title={movie.title} rate={movie.vote_average} tvname={movie.name} desc={movie.overview} id={movie.id} img={`https://image.tmdb.org/t/p/original/${movie.poster_path} `} />

                }

                </SwiperSlide>
            )

          }
        </Swiper>
      </div>
    </div>

  )
}
