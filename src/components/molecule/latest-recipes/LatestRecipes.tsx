import React, { useRef, useState } from 'react'
import { Container } from '@mui/material'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './LatestREcipes.styles.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import { Headline } from '../../atom/Headline'

interface LatestRecipesProps {
  title: string
}

export const LatestRecipes: React.FC<LatestRecipesProps> = ({ title }) => {
  const [swiperRef, setSwiperRef] = useState(null)
  let appendNumber = 4
  let prependNumber = 1

  return (
    <main>
      <Headline
        title={ title }
        alignHeadline='left'
        variantHeadline='h2'
        colorHeadline='black'
      />
      <Container maxWidth="xl">
        <Swiper
          onSwiper={ setSwiperRef }
          slidesPerView={ 3 }
          centeredSlides={ false }
          spaceBetween={ 30 }
          navigation={ true }
          modules={ [Pagination, Navigation] }
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
      </Container>
    </main>
  )
}