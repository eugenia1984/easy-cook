import { Headline } from "../components/atom/Headline"

interface LoginProps {
  title: string
}

export const Login: React.FC<LoginProps> = ({ title }) => {
  return (
    <main>
      <Headline title={title}/>
    </main>
  )
}