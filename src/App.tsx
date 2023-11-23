import { Route, Routes } from 'react-router-dom'

import Home from './_root/pages/Home'
import './global.css'
import RootLayout from './_root/RootLayout'
import Projects from './_root/pages/Projects'
import Contact from './_root/pages/Contact'
import Shop from './_root/pages/Shop'
import About from './_root/pages/About'
import Gallery from './_root/pages/Gallery'
import AddProject from './_root/pages/AddProject'

function App() {
  return (
    <main className="flex flex-1">
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/upload/projects" element={<AddProject/>} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
