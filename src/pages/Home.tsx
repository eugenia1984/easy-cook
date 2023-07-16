import { Headline } from '../components/atom/Headline'
import { CTASection } from '../components/molecule/cta-section/CTASection'
interface HomeProps {
  title: string
}

export const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <main>
      <Headline title={ title } />
      <CTASection />
    </main>
  )
}
