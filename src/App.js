
import './App.css';
import Home from './component/Home.js';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Home />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App;
