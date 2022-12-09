import { Card } from 'react-bootstrap'
import { format_currency } from '../utilities/format_currency'

type ItemProps = {
  id: number
  name: string
  imgUrl: string
  price: number
}
export const Item = ({ id, name, imgUrl, price }: ItemProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{format_currency(price)}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}
