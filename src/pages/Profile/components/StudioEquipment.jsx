import { Settings, Headphones, Monitor, ShieldCheck } from 'lucide-react';

export function StudioEquipment() {
  const equipment = [
    {
      icon: Headphones,
      category: 'Microphone',
      item: 'Rode NT1-A',
      description: 'Professional studio condenser microphone',
    },
    {
      icon: Monitor,
      category: 'Recording Software',
      item: 'Adobe Audition CC',
      description: 'Industry-standard audio editing suite',
    },
    {
      icon: ShieldCheck,
      category: 'Studio Setup',
      item: 'Soundproof Home Studio',
      description: 'Acoustic treatment with professional isolation',
    },
    {
      icon: Settings,
      category: 'Audio Interface',
      item: 'Focusrite Scarlett 2i2',
      description: 'High-quality audio interface',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="w-4 h-4 text-purple-600" />
          <h2 className="text-1xl font-bold text-gray-900">Studio Equipment & Setup</h2>
        </div>
        
        <p className="text-gray-600 mb-8">
          Professional-grade recording equipment ensuring broadcast-quality audio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group flex gap-4 p-5 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-4 h-4 text-purple-600" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                <h3 className="font-semibold text-gray-900 mb-1">{item.item}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Image */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1642181329718-5f13fbc560b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2b2ljZSUyMGFjdG9yJTIwc3R1ZGlvJTIwbWljcm9waG9uZXxlbnwxfHx8fDE3NzMxMjE2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Studio Setup"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-white">
              <p className="font-semibold text-lg mb-1">Professional Recording Environment</p>
              <p className="text-sm text-gray-200">Acoustically treated space for pristine audio quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
