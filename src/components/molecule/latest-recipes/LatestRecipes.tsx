import { Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Headline } from '../../atom/Headline'
import slidersJSON from './../../../api/home-sliders.json'
import { ImageTitleCard } from '../../atom/ImageTitleCard'
import './LatestRecipes.styles.css'

interface LatestRecipesProps {
  title: string
}

export const LatestRecipes: React.FC<LatestRecipesProps> = ({ title }) => {
  const { sliders } = slidersJSON

  return (
    <section>
      <Headline
        title={ title }
        alignHeadline='left'
        variantHeadline='h2'
        colorHeadline='black'
        padding='2.75rem 0rem 0rem'
      />
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={ 3 }
          centeredSlides={ false }
          spaceBetween={ 30 }
          navigation={ true }
          modules={ [Navigation] }
          className="mySwiper"
        >
          { sliders.map(slide => <SwiperSlide key={ slide.id }>
            <ImageTitleCard
              imgSrc={ slide.image }
              imgTitle={ slide.title }
            />
          </SwiperSlide>) }

        </Swiper>
      </Container>
    </section>
  )
}