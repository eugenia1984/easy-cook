import { Headline } from "../components/atom/Headline"

interface HomeProps {
  title: string
}

export const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <main>
      <Headline title={title}/>
    </main>
  )
}
