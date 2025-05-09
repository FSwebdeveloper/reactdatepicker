import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Aboutpage from './Components/Abouts/Aboutpage';
import Servicepage from './Components/Service/Servicepage';
import Tourpage from './Components/Package/Tourpage';
import Contactpage from './Components/Header/Contactpage';
import Andamantour from './Components/Header/andamantour';
import Sundarbantour from './Components/Header/Sundarbantou';
import Kashmirtour from './Components/Header/Kashmirtour';
import Shimlamanalitour from './Components/Header/Shimlamanalitour';
import Sikkimdarjeelingtour from './Components/Header/Sikkimdarjeelingtour';
import Kalimpongdarjeelingtour from './Components/Header/Kalimpongdarjeelingtour';
import Chennai from './Components/Header/Chennai';
import Northsikkimtour from './Components/Header/Northsikkimtour';
import Thailandtour from './Components/Header/Thailandtour';
import Darjeelingtour from './Components/Header/darjeelingtour';
import Guwahatitour from './Components/Header/Guwahatitour';
import Silkroutetour from './Components/Header/Silkroutetour';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <Router>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/service" element={<Servicepage/>}/>
      <Route path="/tourpage" element={<Tourpage/>}/>
      <Route path="/contact" element={<Contactpage/>}/>
      <Route path="/andamantour" element={<Andamantour/>}/>
      <Route path="/sundarbantour" element={<Sundarbantour/>}/>
      <Route path="/kashmirtour" element={<Kashmirtour/>}/>
      <Route path="/shimlamanalitour" element={<Shimlamanalitour/>}/>
      <Route path="/sikkimdarjeelingtour" element={<Sikkimdarjeelingtour/>}/>
      <Route path="/kalimpongdarjeelingtour" element={<Kalimpongdarjeelingtour/>}/>
      <Route path="/chennaitour" element={<Chennai/>}/>
      <Route path="/northsikkimtour" element={<Northsikkimtour/>}/>
      <Route path="/thailandtour" element={<Thailandtour/>}/>
      <Route path="/darjeelingtour" element={<Darjeelingtour/>}/>
      <Route path="/guwahatitour" element={<Guwahatitour/>}/>
      <Route path="/silkroutetour" element={<Silkroutetour/>}/>
    </Routes>
  </Router>
  </div>
);

