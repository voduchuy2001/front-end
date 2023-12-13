import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "./layouts/UserLayout"
import Home from "./user/pages/Home"
import Login from "./user/pages/auth/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <UserLayout /> }>
          <Route index element={ <Home /> }/>
          <Route path="/login" element={ <Login /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App