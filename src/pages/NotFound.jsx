import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
// import './NotFound.css';

function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <FaExclamationTriangle className="error-icon" />
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Page Not Found</h2>
        <p className="error-message">
          The page <code className="error-path">{location.pathname}</code> does not exist.
        </p>
        <Link to="/" className="home-link">
          <FaHome />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;