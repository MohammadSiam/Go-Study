import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Mentors from './Components/Mentors/Mentors';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/mentors">
          <Mentors></Mentors>
        </Route>

        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
