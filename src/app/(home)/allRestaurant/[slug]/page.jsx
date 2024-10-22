'use client';
import Spinner from '@/app/component/Spinner';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Detailspage = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null); // Restaurant details
  const [reviews, setReviews] = useState([]); // Reviews array
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [error, setError] = useState(null); // Error state for review submission
  const { slug } = useParams(); // Get 'slug' from the URL parameters

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://quick-bites-tau.vercel.app/api/allrestrurent/${slug}`);
        const data = await res.json();
        setItem(data.result);
        setReviews(data.result.reviews || []); // Set existing reviews
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  

  console.log('Slug:', slug); // Check the slug value

  // Handle review submission
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    if (newReview.rating <= 0) {
      setError('Please select a valid rating.');
      return; // Early exit if the rating is invalid
    }
    try {
      const res = await fetch('https://quick-bites-tau.vercel.app/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          restaurantName: slug, // Use slug for the restaurant name
          user: 'John Doe', // Replace with actual user info
          rating: newReview.rating,
          comment: newReview.comment,
        }),
      });

      const data = await res.json();
      if (data.status === '200') {
        // Append the new review to the existing reviews array
        setReviews((prevReviews) => [
          ...prevReviews,
          { user: 'John Doe', rating: newReview.rating, comment: newReview.comment, date: new Date() }
        ]);
        setNewReview({ rating: 0, comment: '' }); // Reset form
      } else {
        setError(data.message || 'Failed to submit review.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="pt-24 container mx-auto p-4">
      {loading ? (
        <Spinner />
      ) : (
        item && (
          <>
            {/* Restaurant Details */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-3xl font-bold text-rose-600">{item.name}</h1>
              <p className="text-gray-600 italic">{item.type} Cuisine</p>
              <p className="mt-2 text-gray-700">{item.location}</p>
              <p>Price Range: {item.priceRange}</p>
              <p>Rating: {item.rating || "N/A"}</p>
            </div>

            {/* Review Form */}
            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form onSubmit={handleReviewSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Rating:</label>
                  <select
                    className="w-full border-gray-300 rounded-lg"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                  >
                    <option value={0}>Select Rating</option>
                    <option value={1}>1 Star</option>
                    <option value={2}>2 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={5}>5 Stars</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Comment:</label>
                  <textarea
                    className="w-full border-gray-300 rounded-lg"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-rose-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Submit Review
                </button>
              </form>
            </div>

            {/* Display Reviews */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div key={index} className="mb-6 p-4 bg-white shadow rounded-lg">
                    <p className="font-semibold">{review.user}</p>
                    <p className="text-sm text-gray-600">Rating: {review.rating} / 5</p>
                    <p className="mt-2">{review.comment}</p>
                    <p className="text-xs text-gray-500">Reviewed on {new Date(review.date).toLocaleDateString()}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Detailspage;
