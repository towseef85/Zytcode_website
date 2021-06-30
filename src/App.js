import React,{ useEffect } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'

import CustomNavbar from './components/CustomNavbar';
import Layout1 from './core/Layout1';
import Home from './pages/Home';
import ScrollToTopRoute from './ScrollToTopRoute';

function App(props) {
  useEffect(() => {
    props.hideLoader();
  }, [])
  return (
    <Router>
      <Switch>
      <ScrollToTopRoute exact={true} to={"/"} component={Home} layout1={true}/>
   </Switch>
   </Router>
  );
}

export default App;
