import { BackgroundSection } from '../components/atom/BackgroundSection'
import { Headline } from '../components/atom/Headline'
import backgroundImage from '../assets/bg.jpg'

interface ContactProps {
  title: string
}

export const Contact: React.FC<ContactProps> = ({ title }) => {
  return (
    <main>
      <BackgroundSection srcImg={ backgroundImage }>
        <Headline title={ title } />
      </BackgroundSection>
    </main>
  )
}