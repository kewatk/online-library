import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../store/booksSlice';
import '../style/AddBook.css';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.books.categories);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'title':
        return value.trim().length < 3 ? 'Title must be at least 3 characters' : '';
      case 'author':
        return value.trim().length < 3 ? 'Author name must be at least 3 characters' : '';
      case 'category':
        return !value ? 'Please select a category' : '';
      case 'description':
        return value.trim().length < 10 ? 'Description must be at least 10 characters' : '';
      case 'rating':
        const rating = parseFloat(value);
        if (!value) return 'Rating is required';
        if (isNaN(rating) || rating < 0 || rating > 5) return 'Rating must be between 0 and 5';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      title: true,
      author: true,
      category: true,
      description: true,
      rating: true
    });

    if (Object.keys(newErrors).length === 0) {
      dispatch(addBook({
        ...formData,
        rating: parseFloat(formData.rating)
      }));
      navigate('/browse');
    }
  };

  return (
    <div className="add-book-page">
      <div className="form-container">
        <h1 className="form-title">Add New Book</h1>
        <p className="form-subtitle">Fill in the details to add a new book to the library</p>

        <form onSubmit={handleSubmit} className="book-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Book Title <span className="required">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.title && touched.title ? 'error' : ''}`}
              placeholder="Enter book title"
            />
            {errors.title && touched.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="author" className="form-label">
              Author <span className="required">*</span>
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.author && touched.author ? 'error' : ''}`}
              placeholder="Enter author name"
            />
            {errors.author && touched.author && (
              <span className="error-message">{errors.author}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Category <span className="required">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.category && touched.category ? 'error' : ''}`}
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && touched.category && (
              <span className="error-message">{errors.category}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="rating" className="form-label">
              Rating (0-5) <span className="required">*</span>
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              step="0.1"
              min="0"
              max="5"
              value={formData.rating}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.rating && touched.rating ? 'error' : ''}`}
              placeholder="Enter rating (e.g., 4.5)"
            />
            {errors.rating && touched.rating && (
              <span className="error-message">{errors.rating}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description <span className="required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input form-textarea ${errors.description && touched.description ? 'error' : ''}`}
              placeholder="Enter book description"
              rows="5"
            />
            {errors.description && touched.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Add Book
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate('/browse')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
