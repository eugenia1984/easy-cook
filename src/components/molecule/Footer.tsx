interface Props {
  title: string
}

export const Footer: React.FC<Props> = ({ title }) => {
  return (
    <main>
      <h1>{ title }</h1>
    </main>
  )
}