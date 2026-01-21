import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import BookCard from '../components/BookCard';
// import './BrowseBooks.css';

function BrowseBooks() {
  const { category } = useParams();
  const { books, categories } = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'All');

  const filteredBooks = useMemo(() => {
    let filtered = books;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [books, selectedCategory, searchTerm]);

  return (
    <div className="browse-page">
      <div className="browse-header">
        <h1 className="page-title">Browse Books</h1>
        
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          <button
            className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="browse-results">
        <p className="results-count">
          {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} found
        </p>
        
        {filteredBooks.length === 0 ? (
          <div className="no-results">
            <p>No books found matching your criteria.</p>
          </div>
        ) : (
          <div className="books-grid">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;