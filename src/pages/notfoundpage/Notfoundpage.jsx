import { Link } from "react-router-dom";

export const Notfoundpage = () => {

    return ( 

    
        <div className="notfound-main"> 
           <div className="notfound-404">404 Page Not Found</div>

          <Link to="/" className="notfound-link"> Click Here   to the homepage </Link>
            
        </div>

        
    );
}