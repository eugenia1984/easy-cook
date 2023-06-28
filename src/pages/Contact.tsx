import { BackgroundSection } from '../components/atom/BackgroundSection'
import { ContactForm } from '../components/molecule/contact-form/ContactForm'
import backgroundImage from '../assets/bg.jpg'
interface ContactProps {
  title: string
}

export const Contact: React.FC<ContactProps> = ({ title }) => {
  return (
    <main>
      <BackgroundSection srcImg={ backgroundImage }>
        <ContactForm title={ title } />
      </BackgroundSection>
    </main>
  )
}