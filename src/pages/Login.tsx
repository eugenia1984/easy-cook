import React from 'react'
import { BackgroundSection } from '../components/atom/BackgroundSection'
import { LoginForm } from '../components/molecule/login/LoginForm'
import backgroundImage from '../assets/bg.jpg'

interface LoginProps {
  title: string
}

export const Login: React.FC<LoginProps> = ({ title }) => {
  return (
    <main>
      <BackgroundSection srcImg={ backgroundImage }>
        <LoginForm title={ title } />
      </BackgroundSection>
    </main>
  )
}