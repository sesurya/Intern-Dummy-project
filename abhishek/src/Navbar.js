import {Link} from 'react-router-dom';
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>React Introduction</h1>
            <div className="links" >
                <Link to="/" className="btn">Home</Link>
                <Link to="/create" className="btn" >Add Blogs</Link>

            </div>
        </nav>
        
    );
}
 
export default Navbar;
