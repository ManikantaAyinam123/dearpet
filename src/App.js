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



function App() {
  const pram = useParams();
  const routename = pram.id;
  console.log('this is ----', routename);
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
          
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>

  );
}

export default App;
