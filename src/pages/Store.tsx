import { Col, Row } from 'react-bootstrap'

import { Item } from '../components/Item'
import storeItems from '../data/items.json'

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <Item {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
