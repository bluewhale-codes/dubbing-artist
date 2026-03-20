import { Star, Quote } from 'lucide-react';

export function ClientReviews() {
  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Film Director',
      image: 'https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMGhlYWRzaG90fGVufDF8fHx8MTc3MzA2MzMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      project: 'Movie Dubbing - Drama Film',
      review: 'Priya brought our lead character to life with her incredible voice acting skills. Her ability to convey emotions through voice alone is remarkable. Highly professional and delivered ahead of schedule!',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Animation Producer',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMDIwMjg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      project: 'Animated Series Character',
      review: 'Working with Priya was an absolute pleasure! She perfectly captured the personality of our cartoon character. Her versatility and creativity exceeded our expectations. Will definitely work with her again!',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMGhlYWRzaG90fGVufDF8fHx8MTc3MzA2MzMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      project: 'Commercial Advertisement',
      review: 'Priya delivered a powerful voiceover for our national TV campaign. Her voice perfectly matched our brand identity. Excellent communication throughout the project.',
      date: '3 weeks ago',
    },
    {
      id: 4,
      name: 'Dr. Meera Joshi',
      role: 'Educational Content Creator',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMDIwMjg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      project: 'E-Learning Modules',
      review: 'Clear, engaging, and professional narration for our educational content. Priya made complex topics sound interesting and easy to understand. Outstanding quality!',
      date: '1 week ago',
    },
    {
      id: 5,
      name: 'Vikram Malhotra',
      role: 'YouTube Creator',
      image: 'https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMGhlYWRzaG90fGVufDF8fHx8MTc3MzA2MzMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      project: 'YouTube Video Series',
      review: 'Been working with Priya for 6 months now. She consistently delivers high-quality voiceovers for my tech channel. Very reliable and understands the YouTube audience perfectly!',
      date: '4 days ago',
    },
    {
      id: 6,
      name: 'Neha Verma',
      role: 'Podcast Host',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMDIwMjg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      project: 'Podcast Intro & Ads',
      review: 'Priya created the perfect voice for our podcast brand. Her warm and friendly tone makes our listeners feel connected. Professional, creative, and easy to work with!',
      date: '2 months ago',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Client Reviews</h2>
          <p className="text-sm text-gray-600">What clients say about working with me</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-1xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">(247 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group border-2 border-gray-200 rounded-xl p-6 hover:border-purple-600 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-4 h-4 text-purple-200 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm mb-2 line-clamp-4">
                {review.review}
              </p>

              {/* Project */}
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                  {review.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all font-semibold">
            View All Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
