import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './BookCard.css';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-card-header">
        <span className="book-category">{book.category}</span>
        {book.popular && <span className="popular-badge">Popular</span>}
      </div>
      
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">by {book.author}</p>
      
      <div className="book-rating">
        <FaStar className="star-icon" />
        <span>{book.rating}</span>
      </div>
      
      <p className="book-description">
        {book.description.substring(0, 100)}...
      </p>
      
      <Link to={`/book/${book.id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
}

export default BookCard;