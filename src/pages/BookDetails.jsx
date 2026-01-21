import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar, FaArrowLeft, FaUser, FaTag } from 'react-icons/fa';
// import './BookDetails.css';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);
  
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-details-page">
        <div className="not-found">
          <h2>Book Not Found</h2>
          <Link to="/browse" className="back-link">
            <FaArrowLeft /> Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <button onClick={() => navigate(-1)} className="back-button">
        <FaArrowLeft /> Back to Browse
      </button>

      <div className="book-details-content">
        <div className="book-details-header">
          <div className="book-info">
            <h1 className="details-title">{book.title}</h1>
            
            <div className="details-meta">
              <div className="meta-item">
                <FaUser className="meta-icon" />
                <span>{book.author}</span>
              </div>
              <div className="meta-item">
                <FaTag className="meta-icon" />
                <span>{book.category}</span>
              </div>
              <div className="meta-item rating-display">
                <FaStar className="star-icon" />
                <span>{book.rating} / 5.0</span>
              </div>
            </div>
          </div>

          {book.popular && (
            <span className="popular-badge-large">⭐ Popular</span>
          )}
        </div>

        <div className="book-description-section">
          <h2>Description</h2>
          <p className="full-description">{book.description}</p>
        </div>

        <div className="book-actions">
          <Link to="/browse" className="action-btn primary">
            Browse More Books
          </Link>
          <Link to="/add-book" className="action-btn secondary">
            Add New Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;