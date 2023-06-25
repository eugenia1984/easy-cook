import { Headline } from "../components/atom/Headline"

interface RecipeProps {
  title: string
}

export const Recipe: React.FC<RecipeProps> = ({ title }) => {
  return (
    <main>
      <Headline title={title}/>
    </main>
  )
}