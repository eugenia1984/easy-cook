import { Button, ButtonProps } from '@mui/material'
import { colorBtn, sizeBtn } from '../../utils/types'

/** 
 * Reusable component for a button:
 * @prop: textBtn, a string tha will be the text of the button
 * @prop: sizeBtn: that size of the button, posible values:
 * 'small' , 'medium' or 'large'. Optional prop, by default: 'medium'
 * @prop: colorBtn, that background color of the button. Optional prop,
 * bydefault: primary
 * It can receive more props, for axample some Event for the 
 * onCLick button.
 */
interface SecondaryButtonProps extends ButtonProps {
  text: string
  size?: sizeBtn
  colorBtn?: colorBtn
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  size,
  colorBtn,
  ...props
}) => {
  return (
    <Button
      variant='outlined'
      size={ size ? size : 'medium' }
      color={ colorBtn ? colorBtn : 'primary' }
      sx={ {
        borderRadius: 2,
        paddingY: 1,
        paddingX: 1.5,
      } }
      { ...props }
    >
      { text }
    </Button>
  )
}

export default SecondaryButton