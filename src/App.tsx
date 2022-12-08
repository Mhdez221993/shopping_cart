import { Route, Routes } from 'react-router-dom'

import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Store />} />
        <Route path="/" element={<About />} />
      </Routes>
    </Container>
  )
}

export default App
