import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global/reset.css";
import './css/index.css';
import "./css/Style.css";
import "./components/footer/footer.css";
import "./components/header/header.css";
import "./pages/Homepagecards/homepagecard.css";
import "./pages/mobilegamespage/mobilegames.css";
import "./pages/aboutpage/aboutpage.css";
import "./pages/contactpage/contactpage.css";
import "./pages/notfoundpage/notfoundpage.css";
import "./pages/creatacountpage/createacount.css";
import "./pages/loginpage/loginpage.css";
import "./pages/searchbar/searchbar.css";
import "./global/changelangs/changelangs.css";
import "./pages/cardinfo/Cardinfo.css";
import "./pages/gamedetails/Gamedetails.css";
 
import {App} from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
