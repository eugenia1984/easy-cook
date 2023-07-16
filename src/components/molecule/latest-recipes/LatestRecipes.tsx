import { Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Headline } from '../../atom/Headline'
import slidersJSON from './../../../api/home-sliders.json'
import './LatestRecipes.styles.css'
import { ImageTitleCard } from '../../atom/ImageTitleCard'

interface LatestRecipesProps {
  title: string
}

export const LatestRecipes: React.FC<LatestRecipesProps> = ({ title }) => {
  const { sliders } = slidersJSON

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
    </main>
  )
}