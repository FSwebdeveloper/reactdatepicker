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
    </Routes>
  </Router>
  </div>
);

