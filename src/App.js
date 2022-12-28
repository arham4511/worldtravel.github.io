import React from 'react'
import Destination from './components/destination/Destination';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import ImgCarousel from './components/Carousel/ImgCarousel';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Destination/>
       <Search/>
       <Selects/>
       <ImgCarousel/>
       <Footer />
    </div>
  );
}

export default App;
