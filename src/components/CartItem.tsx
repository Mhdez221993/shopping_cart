import { Button, Stack } from 'react-bootstrap'

import { format_currency } from '../utilities/format_currency'
import storeItems from '../data/items.json'
import { useShppingCart } from '../context/ShoppingCartContext'

type CartItemProps = {
  id: number
  quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShppingCart()

  const item = storeItems.find((item) => item.id === id)
  if (item === null) return null

  return (
    <Stack gap={2} direction="horizontal" className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        alt={item?.name}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto">
        <div>
          {item?.name}{' '}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          {format_currency(item?.price)}
        </div>
      </div>
      <div>
        {format_currency(item?.price * quantity)}{' '}
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item?.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  )
}
