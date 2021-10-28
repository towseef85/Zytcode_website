import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



import Layout1 from './core/Layout1';
import Layout2 from './core/Layout2';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectSingle from './pages/ProjectSingle';
import Services from './pages/Services';
import serviceSingle from './pages/serviceSingle';
import ScrollToTop from './ScrollToTop';


const ComponentWithLayout = (Component) => {
 

  return (props) => (
    <Layout1>
      <Component {...props} />
    </Layout1>
  );
};

const ComponentWithLayout2 = (Component) => {
 
  return (props) => (
    <Layout2>
      <Component {...props} />
    </Layout2>
  );
};

function Routes(props) {

  useEffect(() => {
    props.hideLoader();
  }, [])
  return (
    <BrowserRouter>

      <Switch>
        <ScrollToTop>
        <Route exact path="/" component={ComponentWithLayout(Home)} />
        <Route exact path="/services" component={ComponentWithLayout2(Services)} />
        <Route exact path="/projects" component={ComponentWithLayout2(Projects)} />
        <Route exact path="/contact" component={ComponentWithLayout2(Contact)} />
        <Route exact path="/about" component={ComponentWithLayout2(About)} />
        <Route exact path="/projectSingle/:id" component={ComponentWithLayout2(ProjectSingle)} />
        <Route exact path="/serviceSingle/:id" component={ComponentWithLayout2(serviceSingle)} />
        <Route exact path="/casestudy" component={ComponentWithLayout2(CaseStudy)} />
        </ScrollToTop>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
