import { Headline } from "../components/atom/Headline"

interface FavoritesProps {
  title: string
}

export const Favorites: React.FC<FavoritesProps> = ({ title }) => {
  return (
    <main>
      <Headline title={title}/>
    </main>
  )
}