import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';
// import './Home.css';

function Home() {
  const { books, categories } = useSelector((state) => state.books);
  const popularBooks = books.filter(book => book.popular);
  
  const getCategoryCount = (category) => {
    return books.filter(book => book.category === category).length;
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Online Library</h1>
          <p className="hero-subtitle">
            Discover your next favorite book from our vast collection
          </p>
          <Link to="/browse" className="hero-cta">
            Start Browsing
          </Link>
        </div>
      </section>

      <section className="categories-section">
        <h2 className="section-title">Browse by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              count={getCategoryCount(category)}
            />
          ))}
        </div>
      </section>

      <section className="popular-section">
        <h2 className="section-title">Popular Books</h2>
        <div className="books-grid">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;