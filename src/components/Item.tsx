import { Button, Card } from 'react-bootstrap'

import { format_currency } from '../utilities/format_currency'
import { useShppingCart } from '../context/ShoppingCartContext'

type ItemProps = {
  id: number
  name: string
  imgUrl: string
  price: number
}
export const Item = ({ id, name, imgUrl, price }: ItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShppingCart()

  const quantity = getItemQuantity(id)

  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column w-100">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{format_currency(price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex justify-content-center align-content-center"
                style={{ gap: '.5rem' }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity} in cart</span>
                </div>
                <Button>+</Button>
              </div>

              <Button variant="danger">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
