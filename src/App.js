import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import CreateAccountPage from './Pages/CreateAccountPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/CreateAccountPage' element={<CreateAccountPage/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
