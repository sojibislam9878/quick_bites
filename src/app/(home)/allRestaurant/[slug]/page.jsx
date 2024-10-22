'use client';
import Spinner from '@/app/component/Spinner';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detailspage = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({}); // Restaurant details
  const [reviews, setReviews] = useState([]); // Reviews array
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [newReport, setNewReport] = useState(''); // New report state
  const [error, setError] = useState(null); // Error state for review submission
  const [isReportModalOpen, setIsReportModalOpen] = useState(false); // Modal state
  const { slug } = useParams(); // Get 'slug' from the URL parameters

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/allrestrurent/${slug}`);
      const data = await res.json();
      setItem(data?.result);
      setReviews(data.result.reviews || []); 
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

 
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (newReview.rating <= 0) {
      setError('Please select a valid rating.');
      return;
    }
    try {
      const res = await fetch(`/api/reviews/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          restaurantName: slug,
          user: 'John Doe', 
          rating: newReview.rating,
          comment: newReview.comment,
        }),
      });

      const data = await res.json();
      if (data.status === '200') {
        setReviews((prevReviews) => [
          ...prevReviews,
          { user: 'John Doe', rating: newReview.rating, comment: newReview.comment, date: new Date() },
        ]);
        setNewReview({ rating: 0, comment: '' });
      } else {
        setError(data.message || 'Failed to submit review.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  // Handle report submission
  const handleReportSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/report/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ report: newReport }),
      });

      const data = await res.json();
      if (data.status === '200') {
        setNewReport(''); 
        setIsReportModalOpen(false); 
        toast.success('report sent to admin')
      } else {
        setError(data.message || 'Failed to submit report.');
        
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="pt-24 container mx-auto p-4">
      <ToastContainer/>
      {loading ? (
        <Spinner />
      ) : (
        item && (
          <>
            {/* Restaurant Details */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-3xl font-bold text-rose-600">{item?.name}</h1>
              <p className="text-gray-600 italic">{item?.type} Cuisine</p>
              <p className="mt-2 text-gray-700">{item.location}</p>
              <p>Price Range: {item.priceRange}</p>
              <p>Rating: {item.rating || 'N/A'}</p>

              {/* Report Button */}
              <button
                onClick={() => setIsReportModalOpen(true)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
              >
                <span>Report</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8.25v4.5m0 3v.75m9-8.25a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
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
                    <p className="font-semibold">{review?.user}</p>
                    <p className="text-sm text-gray-600">Rating: {review.rating} / 5</p>
                    <p className="mt-2">{review.comment}</p>
                    <p className="text-xs text-gray-500">Reviewed on {new Date(review.date).toLocaleDateString()}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>

            {/* Report Modal */}
            {isReportModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-6 w-96">
                  <h2 className="text-2xl font-bold mb-4">Report Restaurant</h2>
                  <textarea
                    className="w-full border-gray-300 rounded-lg mb-4"
                    value={newReport}
                    onChange={(e) => setNewReport(e.target.value)}
                    rows="4"
                    placeholder="Describe the issue..."
                  />
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => setIsReportModalOpen(false)}
                      className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleReportSubmit}
                      className="bg-red-500 text-white py-2 px-4 rounded-lg"
                    >
                      Submit Report
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )
      )}
    </div>
  );
};

export default Detailspage;
