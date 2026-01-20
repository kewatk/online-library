import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import './CategoryCard.css';

function CategoryCard({ category, count }) {
  return (
    <Link to={`/books/${category}`} className="category-card">
      <div className="category-icon">
        <FaBook />
      </div>
      <h3 className="category-name">{category}</h3>
      <p className="category-count">{count} books</p>
    </Link>
  );
}

export default CategoryCard;