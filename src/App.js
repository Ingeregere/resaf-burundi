import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Activites from './Components/Activites';
import Apropos from './Components/Apropos';
import Contribuez from './Components/Contribuez';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbars from './Components/Navbar';
import Partenariat from './Components/Partenariat';

function App() {
  return (
    <>
        <Router>
          <Navbars />
          <Routes>
              <Route path='/' exact element={<Home />} /> 
              <Route path='/apropos' exact element={<Apropos />} /> 
              <Route path='/activites' exact element={<Activites />} /> 
              <Route path='/contribuez' exact element={<Contribuez />} /> 
              <Route path='/partenariat' exact element={<Partenariat />} /> 
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;