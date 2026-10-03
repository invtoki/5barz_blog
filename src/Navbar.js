import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>5Barz Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/Create" className="new-blog">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;