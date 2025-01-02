import React from 'react';
import Navbar from './Components/Header/Navbar';
import Slide from './Components/Wallpaper/Slide';
import Contact from './Components/Header/Contact';
import About from './Components/Abouts/About';
import Destination from './Components/Destination/Destination';
import Service from './Components/Service/Service';
import Package from './Components/Package/Package';
import Signup from './Components/Signup/Signup';
import Guides from './Components/Guide/Guides';
import Clients from './Components/Clients/Clients';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';

function App() {

    return (
      <div>
      <Contact/>
      <Navbar/>
      <Slide/>
      <About/>
      <Destination/>
      <Service/>
      <Package/>
      <Signup/>
      <Guides/>
      <Clients/>
      <Blog/>
      <Footer/>
      </div>
    );
};

export default App;