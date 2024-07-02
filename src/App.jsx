import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login/indexlmlwdmlwdmlwdmlwdmlwd";
import Register from "./pages/Register";
import Profile from "./pages/Profile";


import Contact from "./pages/Info/Contact";
import About from "./pages/Info/About";
import NosSponsorts from "./pages/Sponsors/NosSponsorts";
import Blogs from "./pages/Blog/blogs";
// import InfoPrestataire from "./pages/prestataire/InfoPrestataire";
import ProjectSubmission from "./pages/Projets/ProjectSubmission";
// import SponsorRegistration from "./pages/Sponsors/SponsorRegistration";
import AllProjets from "./pages/Projets/AllProjets";
import OneProjet from "./pages/Projets/OneProjet";
import Charte from "./pages/Info/Charte";
import SponsorDashboard from "./pages/dashboard/sponsor/sponsor.dashbord"
import AdminDashboardProjet from "./pages/dashboard/admin/pages/AdminDashboardProjet"
import Main from "./pages/dashboard/admin/layouts/Main"
import { Dashboard, Map, NotFound } from "./pages/dashboard/admin/pages"
import DashPrestataire from "./pages/dashboard/admin/pages/DashPrestataire";
import DashSponsor from "./pages/dashboard/admin/pages/DashSponsor";
import PrestataireDashboard from "./pages/dashboard/prestataire/prestataire.dashbord"
import ProfilePageSponsort from "./pages/dashboard/sponsor/ProfilePageSponsort";
import DashboardPageSponsor from "./pages/dashboard/sponsor/DashboardPageSponsor";
import CreateProfileSponsort from "./pages/dashboard/sponsor/CreateProfileSponsort";
import SocialBonds from "./pages/Info/SocialBonds";
import Inscription from "./pages/Login/Inscription";
import { useEffect, useState } from 'react';
import Logins from "./pages/Login/Login";
import Login from "./pages/Login/Login";
// import DashBoardAdmin from "./pages/dashBoardAdmin"
// import DashBoardPrestataire from "./pages/dashBoardPrestataire"
// import DashBoardSponsor from "./pages/dashBoardSponsor"
const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  const payload = JSON.parse(atob(token.split('.')[1]));
  const expiry = payload.exp * 1000; // exp est en secondes, convertir en millisecondes
  const now = new Date().getTime();
  return now > expiry;
};
function App() {

  const [loggedOut, setLoggedOut] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token && isTokenExpired(token) && !loggedOut) {
  //     setLoggedOut(true);
  //     localStorage.removeItem('token');
  //     localStorage.removeItem('role');
  //     localStorage.removeItem('user');
  //     window.location.reload(); // Recharge la page pour forcer la déconnexion
  //     window.location.href = '/login'; // Rediriger vers la page de login
  //   }
  // }, [loggedOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('token');
      if (token && isTokenExpired(token)) {
        setLoggedOut(true);
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        window.location.reload(); // Recharge la page pour forcer la déconnexion
        window.location.href = '/login'; // Rediriger vers la page de login
      }
    }, 10000); // Vérifie toutes les 20 secondes

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/inscription"
            element={<Inscription />}
          />

          <Route
            path="/login"
            element={<Login />}
          />
          {/* <Route
            path="/logins"
            element={<Logins />}
          /> */}
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/nossponsorts"
            element={<NosSponsorts />}
          />
          <Route
            path="/blogs"
            element={<Blogs />}
          />

          <Route
            path="/socialbonds"
            element={<SocialBonds />}
          />

          {/* <Route
            path="/infoprestataire"
            element={<InfoPrestataire />}
          /> */}
          <Route
            path="/projectsubmission"
            element={<ProjectSubmission />}
          />
          {/* <Route
            path="/sponsorregistration"
            element={<SponsorRegistration />}
          /> */}
          <Route
            path="/allprojets"
            element={<AllProjets />}
          />
          <Route
            path="/oneprojet/:id"
            element={<OneProjet />}
          />
          <Route
            path="/prestataire/:id"
            element={<PrestataireDashboard />}
          />
          <Route
            path="/chart"
            element={<Charte />}
          />
          {/* ---------------------------------------------------------------------------------------------------------- */}
          <Route
            path="/sponsor/:id"
            element={<SponsorDashboard />}
          />

          <Route 
            path="/profilepagesponsort/:id"
            element={<ProfilePageSponsort />}
          />
          <Route
            path="/dashboardpagesponsor"
            element={<DashboardPageSponsor />}
          />

          <Route
            path="/createprofilesponsort/:id"
            element={<CreateProfileSponsort />}
          />

          {/* ---------------------------------------------------------------------------------------------------------- */}
          <Route
            path="/projet/admin"
            element={<AdminDashboardProjet />}
          />

          <Route
            path="/"
            element={<Main />}
          >
            <Route
              exact
              path="/"
              element={<Dashboard />}
            />
            <Route
              exact
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              exact
              path="/admindashboardprojet"
              element={<AdminDashboardProjet />}
            />
            <Route
              exact
              path="/dashprestataire"
              element={<DashPrestataire />}
            />
            <Route
              exact
              path="/dashsponsor"
              element={<DashSponsor />}
            />
            {/* <Route exact path="/map" element={<Map />} /> */}
          </Route>
          {/* ) : (
              <>
                <Route exact path="*" element={<NotFound />} />
              </>
            )}
        <Route path="*" element={<NotFound />} /> */}

          {/* <Route path="/admin" element={<DashBoardAdmin />} />
          <Route path="/sponsor" element={<DashBoardSponsor />} />
          <Route path="/admin" element={<DashBoardPrestataire />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
