import Dashboard from "./pages/Dashboard";
import { BrowserRouter , Route , Routes} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
