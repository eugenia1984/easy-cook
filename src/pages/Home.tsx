import { Headline } from '../components/atom/Headline'
import { Loader } from '../components/atom/Loader'

interface HomeProps {
  title: string
}

export const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <main>
      <Headline title={ title } />
      <Loader title="Loading..."/>
    </main>
  )
}
