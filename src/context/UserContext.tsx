import { createContext, useContext, useState, ReactNode } from 'react'

// Define el tipo de estado para el usuario
interface User {
  fullName: string;
  password: string;
}

// Define el tipo del contexto
interface UserContextType {
  user: User | null;
  login: (fullName: string, password: string) => void;
  logout: () => void;
}

// Creamos el contexto
const UserContext = createContext<UserContextType | null>(null)

// Función auxiliar para verificar si el usuario está autenticado
const isAuthenticated = (user: User | null): boolean => !!user

// Hook personalizado para acceder al contexto
export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext debe usarse dentro de un UserProvider');
  }
  return context
}

// Componente proveedor del contexto
interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (fullName: string, password: string) => {
    setUser({ fullName, password })
  }

  const logout = () => {setUser(null)}

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
