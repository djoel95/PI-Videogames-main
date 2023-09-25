import { Route, Routes } from "react-router-dom";
import { LandingPage, NotFoundPage, Home, FormPage, DetailPage, AboutPage } from "../../pages";
import { SearchBar } from "../../components";
import { useLocation } from "react-router-dom";

const Routing = () => {

  const { pathname } = useLocation();

  return (
    <>
  {pathname !== "/" && (
  <>
    <SearchBar />
  </>
)}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/games" element={<Home/>}  />
      <Route path="/games/:id" element={<DetailPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="/videogames" element={<FormPage />} />
    </Routes>
   </>
   );
 }

export default Routing