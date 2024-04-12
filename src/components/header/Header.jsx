import {
  Searchbar
} from "../../pages/searchbar/Searchbar";

import { Changelangs} from "../../global/changelangs/Changelangs";

import { Link } from "react-router-dom";


export const Header = (props) => {

    return ( 

    <header>
           <div className="header-container">
      <div className="logoflex">
        <a href="/" className="logo">Game Field</a>
      </div>

        < Searchbar/>

      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Mobilegames">Mobile Games</a></li>
          <li><a href="/Aboutpage">About</a></li>
          
          <li><a href="/Contactpage">Contact</a></li>
        </ul>
      </nav>

      <div className="header-loginflex">
        <a href="/Creatacountpage">
          <div className="create-acount">create account</div>
        </a>
        <a href="/Loginpage">
          <div className="login">login</div>
        </a>
      </div>

     <Changelangs/>
      
       
    </div>
        </header>
    );

}