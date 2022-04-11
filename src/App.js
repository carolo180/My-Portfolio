import './App.css';
import Main from "./components/pages/Main";
import {Route, Routes, useLocation} from "react-router-dom";
import ScrollToTop from './components/scroll/ScrollToTop';
import Footer2 from "./components/footer2/Footer2"

function App() {
  
  return (
    <div className="App">
      <Main/>
   </div>
  );
}

export default App;
