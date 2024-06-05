import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import OneProjet from "./pages/Projets/OneProjet";
import Contact from "./pages/Info/Contact";
import About from "./pages/Info/About";
import NosSponsorts from "./pages/Info/NosSponsorts";
import Blogs from "./pages/Blog/blogs";
import InfoPrestataire from "./pages/prestataire/InfoPrestataire";
import ProjectSubmission from "./pages/Projets/ProjectSubmission";
import SponsorRegistration from "./pages/Sponsors/SponsorRegistration";
import DonationPage from "./pages/Projets/DonationPage";


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
          <Route path="/profile" element={<Profile />} />
          <Route path="/oneprojet" element={<OneProjet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/nossponsorts" element={<NosSponsorts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/infoprestataire" element={<InfoPrestataire />} />
          <Route path="/projectsubmission" element={<ProjectSubmission />} />
          <Route path="/sponsorregistration" element={<SponsorRegistration />} />
          <Route path="/donationpage" element={<DonationPage />} />

          
          {/* <Route path="/admin" element={<DashBoardAdmin />} />
          <Route path="/sponsor" element={<DashBoardSponsor />} />
          <Route path="/admin" element={<DashBoardPrestataire />} /> */}




        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
