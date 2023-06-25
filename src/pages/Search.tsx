import { Headline } from "../components/atom/Headline"

interface SearchProps {
  title: string
}

export const Search: React.FC<SearchProps> = ({ title }) => {
  return (
    <main>
      <Headline title={title}/>
    </main>
  )
}