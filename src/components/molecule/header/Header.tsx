import React, { useState } from 'react'
import { HeaderNavBar } from './HeaderNavBar'
import './Header.styles.css'

interface Props {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  const [isLoged, setIsLoged] = useState(true)

  return (
    <header>
      <HeaderNavBar
        title={ title }
        isLoged={ isLoged }
        setIsLoged={ setIsLoged }
      />
    </header>
  )
}