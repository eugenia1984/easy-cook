import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { YEAR } from '../../utils/constants'
import './Footer.style.css'

interface FooterProps {
  text: string
}

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer>
      <Typography align="right" gutterBottom>
        Designed by <Link to="https://www.linkedin.com/in/maríaeugeniacosta/" target="_blank">María Eugenia Costa</Link > and <Link to="https://github.com/flopixx" target="_blank">Florencia Velazquez</Link>
      </Typography>
      <Typography gutterBottom>
        &copy; Copyright { YEAR } - { text }
      </Typography>
    </footer>
  )
}