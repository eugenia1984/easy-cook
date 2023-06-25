interface Props {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <main>
      <h1>{ title }</h1>
    </main>
  )
}