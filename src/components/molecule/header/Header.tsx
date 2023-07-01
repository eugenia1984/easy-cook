import React, { useState } from 'react'
import { HeaderNavBar } from './HeaderNavBar'
import './Header.styles.css'

interface Props {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {

  return (
    <header>
      <HeaderNavBar
        title={ title }
      />
    </header>
  )
}