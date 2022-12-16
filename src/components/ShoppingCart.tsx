import { Offcanvas } from 'react-bootstrap'
import { useShppingCart } from '../context/ShoppingCartContext'

type ShoppingCartProps = {
  isOpen: boolean
}

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart } = useShppingCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  )
}
