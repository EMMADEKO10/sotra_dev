import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AllProjets from "./pages/Projets/AllProjets"
import Profile from "./pages/Profile"
import Sponsorise from "./pages/Add_projet/Sponsorise"
import ProtectedPage from "./components/Components_AllPages/ProtectedPage"

// import DashBoardAdmin from "./pages/dashBoardAdmin"
// import DashBoardPrestataire from "./pages/dashBoardPrestataire"
// import DashBoardSponsor from "./pages/dashBoardSponsor"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projet" element={<AllProjets />} />
          <Route path="/profile" element={<ProtectedPage ><Profile /></ProtectedPage>} />
          <Route path="/project/:id" element={<Sponsorise />} />
          {/* <Route path="/admin" element={<DashBoardAdmin />} />
          <Route path="/sponsor" element={<DashBoardSponsor />} />
          <Route path="/admin" element={<DashBoardPrestataire />} /> */}




        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
