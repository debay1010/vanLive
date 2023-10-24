import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect } from 'react-router-dom';
import { loader as VansLoader } from './pages/Vans/Vans'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail, { loader as VansDetailLoader } from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as HostVansLoader } from './pages/Host/HostVans';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanDetail, { loader as HostVanDetailLoader } from './pages/Host/HostVanDetail';
import NotFound from './pages/NotFound';
import Error from './components/Error'
import Login, { action as loginAction, loader as LoginLoader } from './pages/Login'
import { requireAuth } from './utils';


import "./server"
const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}   >
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} action={loginAction} loader={LoginLoader} />
    <Route
      path="vans" element={<Vans />}
      errorElement={<Error />}
      loader={VansLoader} />
    <Route path="vans/:id" element={<VanDetail />}
      loader={VansDetailLoader} />

    <Route path="host" element={<HostLayout />} >
      <Route index element={<Dashboard />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route path="income" element={<Income />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route path="reviews" element={<Reviews />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route path="vans" element={<HostVans />}
        // loader={async () => {
        //   return null
        // }} 
        loader={HostVansLoader}
      />

      {/* <Route path="vans/:id" element={<HostVansDetail />} /> */}
      <Route path="vans/:id" element={<HostVanDetail />} loader={HostVanDetailLoader} >
        <Route index element={<HostVanInfo loader={async ({ request }) => await requireAuth(request)} />} />
        <Route path="pricing" element={<HostVanPricing />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path="photos" element={<HostVanPhotos />} loader={async ({ request }) => await requireAuth(request)} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>

      </footer>

    </>
  )
}
export default App
