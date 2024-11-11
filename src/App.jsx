import React from 'react'
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Subscribe from './Components/Subscribe/Subscribe';
import Testimonails from './Components/Testimonials/Testimonails';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
const App = () => {
  const [orderPopup,setOrderPopup] = React.useState(false);
  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  }
  React.useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100,
  
    });
    AOS.refresh();
  }, []);  
  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
    <Navbar handleOrderPopup={handleOrderPopup}></Navbar>
    <Hero handleOrderPopup={handleOrderPopup}></Hero>
    <Products></Products>
    <TopProducts handleOrderPopup={handleOrderPopup}></TopProducts>
    <Banner></Banner>
    <Subscribe></Subscribe>
    <Products></Products>
    <Testimonails></Testimonails>
    <Footer></Footer>
    <Popup orderPopup={orderPopup} setOrderPopup = {setOrderPopup}></Popup>
    </div>
    </>

  )
}

export default App;