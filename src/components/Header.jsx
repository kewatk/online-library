import { Link, useLocation } from 'react-router-dom';
import { FaBook, FaHome, FaPlus, FaSearch } from 'react-icons/fa';
import './Header.css';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <FaBook className="logo-icon" />
          <span>Online Library</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/browse" className={`nav-link ${isActive('/browse')}`}>
            <FaSearch />
            <span>Browse Books</span>
          </Link>
          <Link to="/add-book" className={`nav-link ${isActive('/add-book')}`}>
            <FaPlus />
            <span>Add Book</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;