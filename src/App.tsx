import { Route, Routes } from 'react-router-dom'

import { About } from './pages/About'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Navbar } from './components/NavBar'
import { Store } from './pages/Store'

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
