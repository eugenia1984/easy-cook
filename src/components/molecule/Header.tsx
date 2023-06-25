interface Props {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header>
      <h1>{ title }</h1>
    </header>
  )
}