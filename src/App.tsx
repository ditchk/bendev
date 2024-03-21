import { Route, Routes} from 'react-router-dom'

import Home from './_root/pages/Home'
import './global.css'
import RootLayout from './_root/RootLayout'
import Projects from './_root/pages/Projects'
import Contact from './_root/pages/Contact'
import Shop from './_root/pages/Shop'
import About from './_root/pages/About'
import Blogposts from './_root/pages/Blogposts'
import Privacypoliy from './components/shared/Privacypoliy'
import Adminpanel from './components/admin/Adminpanel'
import { Toaster } from './components/ui/toaster'
import Unauthorized from './components/404/Unauthorized'
import CookieConcent from './components/cookie/CookieConcent'
import Checkoutpage from './components/checkout/Packages/Checkoutpage'
import Opportunities from './_root/pages/Opportunities'
import Maintainance from './components/maintainance/Maintainance'
import MaintainanceError from './lib/utils/MaintainanceError'
import BasicCheckOut from './components/checkout/Packages/Checkoutpage'
import CheckoutLayout from './components/checkout/CheckoutLayout'
import PrivateRoutes from './lib/utils/PrivateRoutes'

function App() {
  return (
      <main>
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogposts />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/mycv" element={<About/>} />
                <Route path="/privacy-policy" element={<Privacypoliy />} />
                <Route path="/error" element={<Unauthorized />} /> 
                <Route path="/maintainance" element={<Maintainance />} />
            </Route>
            {/* Protected pages */}
            <Route element={<PrivateRoutes />}>
              <Route path="/admin" element={<Adminpanel />} />
              <Route path='/opportunities&careers' element={<Opportunities />} />
            </Route>

            {/* Maintainance Error page */}

            <Route element={<MaintainanceError />}>
              <Route path="/projects" element={<Projects />} />
            </Route>

            <Route element={<CheckoutLayout />}>
              <Route path='/packages/basic' element={<BasicCheckOut />} />
              <Route path='/packages/premium' element={<Checkoutpage />} />
            </Route>

        </Routes>
        <Toaster />
        <CookieConcent />
      </main> 
  )
}

export default App
