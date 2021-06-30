import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes'
import "./assets/themify-icon/themify-icons.css";
import "./assets/simple-line-icon/simple-line-icons.css";
import "./assets/font-awesome/css/all.css";
import "./assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "./assets/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";


const loader = document.querySelector("#preloader");
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

ReactDOM.render(
  <React.StrictMode>
    <Routes hideLoader={hideLoader} showLoader={showLoader} />
  </React.StrictMode>,
  document.getElementById('root')
);


