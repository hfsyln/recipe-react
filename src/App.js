import './App.css';
import Login from "./pages/login/Login";
import NavBar from "./components/navbar/NavBar" ;
import Home from "./pages/home/Home"
import { BrowserRouter, Routes, Route  } from 'react-router-dom';




function App() {

  

  return (
    <div>
        <BrowserRouter>
    
    <Routes>
        <Route path="/home" element={<Home />} />
      
    </Routes>
    </BrowserRouter>
      
      <Login/>

    </div>
  )
};

export default App;
