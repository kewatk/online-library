import { createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A gripping tale of racial injustice and childhood innocence.",
    rating: 4.8,
    popular: true
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    description: "A dystopian social science fiction novel and cautionary tale.",
    rating: 4.7,
    popular: true
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "A science fiction novel set in the distant future amidst a huge interstellar empire.",
    rating: 4.6,
    popular: true
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "A brief history of humankind from the Stone Age to the modern age.",
    rating: 4.5,
    popular: true
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "A fantasy novel about the quest of home-loving hobbit.",
    rating: 4.7,
    popular: false
  },
  {
    id: 6,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-Fi",
    description: "The first novel in the Foundation Trilogy exploring the fall of a galactic empire.",
    rating: 4.6,
    popular: false
  },
  {
    id: 7,
    title: "Educated",
    author: "Tara Westover",
    category: "Non-Fiction",
    description: "A memoir about a young woman who grows up in a survivalist family.",
    rating: 4.5,
    popular: false
  },
  {
    id: 8,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
    rating: 4.4,
    popular: false
  },
  {
    id: 9,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    description: "The first novel in the Harry Potter series about a young wizard.",
    rating: 4.9,
    popular: true
  },
  {
    id: 10,
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Non-Fiction",
    description: "A guide for creating successful startups through continuous innovation.",
    rating: 4.3,
    popular: false
  }
];

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialBooks,
    categories: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Biography', 'History']
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: Date.now(),
        popular: false
      };
      state.books.unshift(newBook);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;