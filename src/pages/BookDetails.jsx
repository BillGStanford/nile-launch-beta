import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  StarIcon, 
  BookOpenIcon, 
  CalendarIcon, 
  GlobeIcon, 
  LayersIcon,
  LockIcon 
} from 'lucide-react';
import books from '../data/books';

const BookDetails = () => {
  const { slug } = useParams();
  const book = books.find(b => b.slug === slug);

  if (!book) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center">
        <h1 className="text-2xl text-amber-900 font-bold">Book not found</h1>
      </div>
    );
  }

  const isAvailable = book.status === 'available';

  const handleReadBook = (e) => {
    e.preventDefault();
    window.open(book.pdfLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Book Cover */}
            <div className="md:flex-shrink-0 p-6">
              <img
                className="w-full md:w-80 object-cover rounded-lg shadow-md"
                src={book.coverImage}
                alt={book.title}
              />
              <div className="mt-6 space-y-4">
                {isAvailable ? (
                  <button
                    onClick={handleReadBook}
                    className="w-full bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition flex items-center justify-center space-x-2"
                  >
                    <BookOpenIcon className="w-5 h-5" />
                    <span>Read Book Now</span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-400 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 cursor-not-allowed"
                  >
                    <LockIcon className="w-5 h-5" />
                    <span>Coming Soon</span>
                  </button>
                )}
              </div>
            </div>

            {/* Book Details */}
            <div className="p-6 md:p-8 flex-grow">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-amber-900">{book.title}</h1>
                  <p className="text-xl text-amber-700 mt-2">{book.author}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <StarIcon className="w-6 h-6 text-amber-500 fill-current" />
                  <span className="text-lg text-amber-800">
                    {book.ratings.averageRating} ({book.ratings.totalReviews.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="prose prose-amber max-w-none">
                  <h2 className="text-2xl font-bold text-amber-900">About this book</h2>
                  <p className="text-amber-800">{book.longDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Book Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-900">Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <LayersIcon className="w-5 h-5 text-amber-600" />
                        <span className="text-amber-800">{book.details.pages} pages</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="w-5 h-5 text-amber-600" />
                        <span className="text-amber-800">Published in {book.details.publishedYear}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GlobeIcon className="w-5 h-5 text-amber-600" />
                        <span className="text-amber-800">{book.details.language}</span>
                      </div>
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-900">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {book.keywords.map(keyword => (
                        <span
                          key={keyword}
                          className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
