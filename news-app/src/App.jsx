import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Header/Home";
import Navbar from "./Components/Header/Navbar";
import Error from "./Components/Header/Error";
import Contact from "./Components/Header/Contact";
import Services from "./Components/Header/Services";
import About from "./Components/Header/About";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/*" element={<Error />}></Route>
            <Route path="/contact/" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
