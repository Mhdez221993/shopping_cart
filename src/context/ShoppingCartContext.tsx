import { ReactNode, createContext, useContext } from 'react'

type ShoppingCartProps = {
  children: ReactNode
}

type ShoppingCartContext = {}

const ShoppingCartContext = createContext({})

export function useShppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
