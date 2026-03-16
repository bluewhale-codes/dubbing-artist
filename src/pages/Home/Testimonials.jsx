import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Film Director',
      company: 'Independent Films',
      content: 'DubbingArtist transformed our project! We found the perfect dubbing artist for our international release. The quality exceeded our expectations and the turnaround was incredibly fast.',
      rating: 5,
      avatar: 'SM',
    },
    {
      name: 'Alex Chen',
      role: 'Content Creator',
      company: 'YouTube (2M subscribers)',
      content: 'As a YouTuber reaching global audiences, I needed multilingual dubbing. This platform connected me with amazing artists who understand my content perfectly. Game changer!',
      rating: 5,
      avatar: 'AC',
    },
    {
      name: 'David Rodriguez',
      role: 'Animation Studio Owner',
      company: 'Animax Studios',
      content: 'We use DubbingArtist for all our animation dubbing needs. The artists are professional, the platform is easy to use, and the results are always studio-quality. Highly recommended!',
      rating: 5,
      avatar: 'DR',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Join thousands of satisfied filmmakers and content creators
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Quote className="w-10 h-10 text-cyan-300 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                ))}
              </div>

              <p className="text-white/95 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-cyan-200">{testimonial.role}</p>
                  <p className="text-sm text-cyan-300">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}