import './App.css';
import Login from "./pages/login/Login";
import NavBar from "./components/navbar/NavBar" ;
import AppRouter from './router/AppRouter';
import Home from "./pages/home/Home"
import { BrowserRouter} from 'react-router-dom';
import About from './pages/about/About';
import RecipeCard from './pages/home/RecipeCard';




function App() {

  

  return (
    <div>
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>

    </div>
  )
};

export default App;
