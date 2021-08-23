
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from "./pages/MovieDetail";

import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={AboutUs} />
          <Route path='/contact' component={ContactUs} />
          <Route exact path='/work' component={OurWork} />
          <Route path='/work/:id' component={MovieDetail} />
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
