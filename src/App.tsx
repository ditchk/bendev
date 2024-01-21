import { Route, Routes} from 'react-router-dom'

import Home from './_root/pages/Home'
import './global.css'
import RootLayout from './_root/RootLayout'
import Projects from './_root/pages/Projects'
import Contact from './_root/pages/Contact'
import Shop from './_root/pages/Shop'
import About from './_root/pages/About'
import CarricullumV from './components/shared/CarricullumV'
import PrivateRoutes from './lib/utils/PrivateRoutes'
import SigninForm from './_auth/forms/SigninForm'
import AuthLayout from './_auth/AuthLayout'
import Blogposts from './_root/pages/Blogposts'
import Privacypoliy from './components/shared/Privacypoliy'
import Adminpanel from './components/admin/Adminpanel'
import SignupForm from './_auth/forms/SignupForm'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
      <main className="">
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogposts />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/mycv" element={<CarricullumV/>} />
                <Route path="/privacy-policy" element={<Privacypoliy />} />
            </Route>

            {/* Login routes */}
            <Route element={<AuthLayout />}>
              <Route path="/auth/signin" element={<SigninForm />} />
              <Route path="/signup" element={<SignupForm/>} />
            </Route>
            
            
            {/* Protected pages */}
            <Route element={<PrivateRoutes />}>
              <Route path="/admin" element={<Adminpanel />} />
            </Route>
        </Routes>
        <Toaster />
      </main> 
  )
}

export default App
