import { Headline } from "../components/atom/Headline"

interface NotFoundProps {
  title: string
}

export const NotFound: React.FC<NotFoundProps> = ({ title }) => {
  return (
    <main>
      <Headline title={title}/>
    </main>
  )
}