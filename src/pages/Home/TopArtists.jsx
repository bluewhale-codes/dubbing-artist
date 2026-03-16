import { Star, MapPin, Heart } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ImageWithFallback } from '../../components/ui/utils/ImageWithFallback';

export function TopArtists() {
  const artists = [
    {
      name: 'Marcus Johnson',
      image: 'https://images.unsplash.com/photo-1740102075520-fe22a53035cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2b2ljZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMTE5NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      languages: 'English, Spanish, French',
      rating: 4.9,
      reviews: 342,
      price: '$150',
      location: 'Los Angeles, USA',
      speciality: 'Film & Animation',
      level: 'Top Rated',
    },
    {
      name: 'Sofia Rodriguez',
      image: 'https://images.unsplash.com/photo-1769636930016-5d9f0ca653aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczMTE5NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      languages: 'Spanish, Portuguese, Italian',
      rating: 5.0,
      reviews: 489,
      price: '$200',
      location: 'Madrid, Spain',
      speciality: 'Documentaries',
      level: 'Pro',
    },
    {
      name: 'Kenji Tanaka',
      image: 'https://images.unsplash.com/photo-1706025090996-63717544be2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3MzExMTIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      languages: 'Japanese, Korean, English',
      rating: 4.8,
      reviews: 276,
      price: '$180',
      location: 'Tokyo, Japan',
      speciality: 'Anime & Gaming',
      level: 'Top Rated',
    },
    {
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1600696444233-20accba67df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXRpbmElMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzA0Mjg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      languages: 'Hindi, English, Tamil',
      rating: 4.9,
      reviews: 421,
      price: '$120',
      location: 'Mumbai, India',
      speciality: 'Commercial & Ads',
      level: 'Rising Talent',
    },
  ];

  return (
    <section id="artists" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top Dubbing Artists
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Work with the best voice professionals from around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-50">
                  <Heart className="w-5 h-5 text-gray-700 hover:text-cyan-600" />
                </button>
                <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {artist.level}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
                    {artist.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{artist.location}</span>
                  </div>
                  <p className="text-sm text-cyan-600 font-semibold">
                    {artist.speciality}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-sm">{artist.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({artist.reviews})</span>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Languages:</span> {artist.languages}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="text-2xl font-bold text-gray-900">{artist.price}</p>
                  </div>
                 <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-700"
          >
            View All Artists
          </Button>
        </div>
      </div>
    </section>
  );
}