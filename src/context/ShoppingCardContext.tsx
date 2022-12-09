import { ReactNode, createContext, useContext } from 'react'

type ShoppingCardProps = {
  children: ReactNode
}

const ShoppingCardContext = createContext({})

export function useShppingCard() {
  return useContext(ShoppingCardContext)
}

export function ShoppingCardProvider({ children }: ShoppingCardProps) {
  return (
    <ShoppingCardContext.Provider value={{}}>
      {children}
    </ShoppingCardContext.Provider>
  )
}
