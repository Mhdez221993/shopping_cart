import { Card } from 'react-bootstrap'

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
    </Card>
  )
}
