import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<BrowseBooks />} />
              <Route path="/books/:category" element={<BrowseBooks />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/add-book" element={<AddBook />} />
            </Routes>
          </>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;