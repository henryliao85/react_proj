import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Poster from './Pages/Poster';
import Footer from './Components/Footer';
import SyllabusPage from './Components/SyllabusPage';

const App = () => {
  return (
    <BrowserRouter> 
      <div className='App min-width'>
        <Nav />
        <div className='content'>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/Poster"} element={<Poster />} />
            <Route path={"/syllabus/:sid"} element={<SyllabusPage  />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
