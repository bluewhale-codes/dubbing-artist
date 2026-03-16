import { Shield, Globe, Mic, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Verified Dubbing Artists',
      description: 'Every artist is thoroughly vetted and verified. Work with professionals who have proven track records.',
      gradient: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Globe,
      title: 'Multiple Languages',
      description: 'Access dubbing artists fluent in 50+ languages. Perfect for global content distribution.',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Mic,
      title: 'Studio-Quality Recordings',
      description: 'All artists use professional equipment and studios. Get broadcast-ready audio every time.',
      gradient: 'from-cyan-600 to-blue-600',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Zap,
      title: 'Fast Project Delivery',
      description: 'Most projects delivered within 24-48 hours. Get your dubbing done without delays.',
      gradient: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose DubbingArtist?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to get professional dubbing for your projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}