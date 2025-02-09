import React, { useState, useMemo } from 'react';
import { BookIcon, SearchIcon } from 'lucide-react';
import BookCard from '../components/BookCard';
import books from '../data/books';
import CountdownOverlay from '../components/CountdownOverlay'; // Import the CountdownOverlay

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCountdown, setShowCountdown] = useState(true); // State to control the overlay

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return books;

    const query = searchQuery.toLowerCase().trim();
    
    return books.filter(book => {
      const titleMatch = book.title.toLowerCase().includes(query);
      const descriptionMatch = 
        book.description.toLowerCase().includes(query) ||
        book.longDescription.toLowerCase().includes(query);
      const authorMatch = book.author.toLowerCase().includes(query);
      const genreMatch = book.genre.toLowerCase().includes(query);
      const keywordMatch = book.keywords.some(keyword => 
        keyword.toLowerCase().includes(query)
      );

      return titleMatch || descriptionMatch || authorMatch || genreMatch || keywordMatch;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Show the CountdownOverlay if showCountdown is true */}
      {showCountdown && <CountdownOverlay />}

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-2xl font-extrabold text-amber-900 leading-tight">
            EXCLUSIVE LAUNCH:
          </h1>
          <h1 className="text-5xl font-extrabold text-amber-900 leading-tight">
            Discover Timeless Stories
          </h1>
          <p className="text-xl text-amber-800 opacity-80">
            Explore our carefully curated collection of literary masterpieces that have shaped generations.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, genre, or keywords..."
              className="w-full px-6 py-3 rounded-full border-2 border-amber-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600 focus:outline-none"
            />
            <SearchIcon className="absolute right-4 top-3.5 w-5 h-5 text-amber-600" />
          </div>
        </div>
      </div>

      {/* Books Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-amber-900">
            {searchQuery ? 'Search Results' : 'Featured Books'}
          </h2>
          <div className="text-amber-700">
            {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
          </div>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
              <SearchIcon className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              No books found
            </h3>
            <p className="text-amber-700">
              Try adjusting your search terms or browse our featured collection.
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-amber-600 hover:text-amber-700 font-semibold"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
