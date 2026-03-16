import { FileText, Users, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Post Your Dubbing Project',
      description: 'Describe your project requirements, select languages, set your budget, and upload reference materials.',
      color: 'cyan',
    },
    {
      number: '02',
      icon: Users,
      title: 'Receive Proposals from Artists',
      description: 'Verified dubbing artists review your project and send proposals with samples and timelines.',
      color: 'blue',
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Hire and Receive High-Quality Dubbing',
      description: 'Choose your preferred artist, collaborate through our platform, and receive studio-quality recordings.',
      color: 'cyan',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[url('https://res.cloudinary.com/dycjjaxsk/image/upload/v1773135340/retro-digital-art-illustration-person-using-radio-technology_2_hw4tj3.jpg')] bg-cover bg-center  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get professional dubbing in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-cyan-200 via-blue-300 to-cyan-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number badge */}
              <div className="flex justify-center mb-6">
                <div className={`bg-gradient-to-br from-${step.color}-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl shadow-${step.color}-500/30 ring-4 ring-white`}>
                  <step.icon className="w-8 h-8" />
                </div>
              </div>

              <div className="text-center space-y-4 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`text-5xl font-bold text-${step.color}-100`}>
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}