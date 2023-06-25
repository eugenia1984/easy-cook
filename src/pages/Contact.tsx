import { Headline } from "../components/atom/Headline"

interface ContactProps {
  title: string
}

export const Contact: React.FC<ContactProps> = ({ title }) => {
  return (
    <main>
      <Headline title={title}/>
    </main>
  )
}