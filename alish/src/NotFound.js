import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry!! The Page You Are Looking is not Found.</h2>
            <Link to="/">Back to the Home Page.</Link>
        </div>
    );
}
 
export default NotFound;