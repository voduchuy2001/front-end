import { Outlet } from "react-router-dom"
import Navbar from "../user/partials/Navbar"
import Footer from "../user/partials/Footer"
import QuickView from "../components/QuickView"

const UserLayout = () => {
  return (
    <>
        <QuickView />
        <Navbar />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default UserLayout