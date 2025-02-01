import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, BookOpenIcon } from 'lucide-react';

const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book.slug}`}>
      <div className="bg-white p-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
        <div className="relative">
          <img
            src={book.thumbnail}
            alt={book.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          {book.isNew && (
            <span className="absolute top-2 right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
              New Release
            </span>
          )}
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-bold text-amber-900">{book.title}</h3>
          <p className="text-amber-700">{book.author}</p>
          <div className="flex items-center space-x-1">
            <StarIcon className="w-5 h-5 text-amber-500 fill-current" />
            <span className="text-amber-700">
              {book.ratings.averageRating} ({book.ratings.totalReviews.toLocaleString()})
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {book.keywords.slice(0, 3).map(keyword => (
              <span
                key={keyword}
                className="bg-amber-50 text-amber-800 text-xs px-2 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;