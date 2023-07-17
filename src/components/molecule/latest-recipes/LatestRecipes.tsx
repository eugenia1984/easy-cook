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
          centeredSlides={ true }
          spaceBetween={ 30 }
          navigation={ true }
          modules={ [Navigation] }
          breakpoints={ {
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            420: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            899: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1199: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          } }
          className="mySwiper"
        >
          { sliders.map(slide => <SwiperSlide key={ slide.id }>
            <ImageTitleCard
              imgSrc={ slide.image }
              imgTitle={ slide.title }
              recipeId={slide.id}
            />
          </SwiperSlide>) }

        </Swiper>
      </Container>
    </section>
  )
}