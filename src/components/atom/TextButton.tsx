import { Button } from '@mui/material'
import { ButtonProps } from '@mui/material/Button'

interface Props extends ButtonProps { }

const TextButton = (props: Props) => {
  return (
    <Button
      { ...props }
      variant="text"
      sx={ {
        fontSize: '14px !important',
        padding: '0 10px !important',
        textDecoration: 'underline !important' as any
      } }
    >
      { props.children }
    </Button>

  )
}