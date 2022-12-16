import { Stack } from 'react-bootstrap'
import storeItems from '../data/items.json'

type CartItemProps = {
  id: number
  quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const item = storeItems.find((item) => item.id === id)
  if (item === null) return null

  return (
    <Stack gap={2} direction="horizontal">
      <img
        src={item?.imgUrl}
        alt={item?.name}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
    </Stack>
  )
}
