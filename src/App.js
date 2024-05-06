import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomePage from './Pages/HomePage';
import CreateAccountPage from './Pages/CreateAccountPage';
import SignInMobilePage from './Pages/SignInMobilePage';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuppyPage from './Pages/PuppyPage';
import KittenPage from './Pages/KittenPage';
import DogPage from './Pages/DogPage';
import CheckoutPage from './Pages/CheckoutPage';
import DogTabsPage from './Pages/DogTabsPage';
import DetailsPage from './Pages/DetailsPage';
import {Icon} from "@iconify/react";
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
  
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/CreateAccountPage' element={<CreateAccountPage/>}/>
          <Route path='/SignInMobilePage' element={<SignInMobilePage/>}/>
          <Route path='/PuppyPage' element={<PuppyPage/>}/>
          <Route path='/KittenPage' element={<KittenPage/>}/>
          <Route path='/DogPage' element={<DogPage/>}/>
          <Route path='/CheckoutPage' element={<CheckoutPage/>}/>
          <Route path='/DogTabsPage/:id' element={<DogTabsPage/>}/>
          <Route path='/DetailsPage' element={<DetailsPage/>}/>
          
        </Routes>
      </BrowserRouter>
      <ToastContainer />
     
      <Typography sx={{position:'fixed',bottom:'11%',right:'3%'}}><Icon  icon="logos:whatsapp-icon" width="35" height="35" /></Typography>
      {showScrollToTop && (<Typography sx={{position:'fixed',bottom:'5%',right:'3%',backgroundColor:'#6534Ac'}}onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Icon icon="material-symbols:keyboard-arrow-up" width="30" height="25"  style={{color: '#FFFFFF'}} /></Typography>)}
    </>
  );
}

export default App;
