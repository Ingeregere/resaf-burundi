import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie'
import Activites from './Components/Activites';
import Apropos from './Components/Apropos';
import Contribuez from './Components/Contribuez';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbars from './Components/Navbar';
import Partenariat from './Components/Partenariat';

function App(props) {
  const {t} = useTranslation()
  return (
    <>
        <Router>
          <Navbars />
          <Routes>
              <Route path={'/'} element={<Home />} />
              {/* <Route path="/" element={<Navigate replace to={`/${t('a_home_url')}`} />} /> */}
              <Route path={'a-propos'}  exact element={<Apropos />} /> 
              <Route path={'activity'} exact element={<Activites />} /> 
              <Route path={'contribute'} exact element={<Contribuez />} /> 
              <Route path={'partenariat'} exact element={<Partenariat />} /> 
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;