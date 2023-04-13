import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import RedmondPage from "main/pages/RedmondPage";
import CupertinoPage from "main/pages/CupertinoPage";
import SanJosePage from "main/pages/SanJosePage";
import SanMateoPage from "main/pages/SanMateoPage";

import "bootstrap/dist/css/bootstrap.css";



function App() {

  return (
    <BrowserRouter basename="/team00-s23-5pm-3">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/Redmond" element={<RedmondPage />} />
        <Route exact path="/towns/Cupertino" element={<CupertinoPage />} />
        <Route exact path="/towns/SanJose" element={<SanJosePage />} />
        <Route exact path="/towns/SanMateo" element={<SanMateoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
