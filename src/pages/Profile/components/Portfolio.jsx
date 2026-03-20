import { Play, ExternalLink, Film,SquarePen } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import FormDialog from '../Forms/FormDialog';
import PortfolioUploadForm from '../Forms/PortfolioUploadForm';
export function Portfolio() {

  const [open,setOpen] = useState(false);

  const FormToggle = ()=>{
        setOpen(!open);
  }
  const projects = [
    {
      id: 1,
      title: 'Bollywood Film - "Zindagi Ke Rang"',
      category: 'Movie Dubbing',
      description: 'Lead character dubbing for romantic drama',
      year: '2025',
    },
    {
      id: 2,
      title: 'Animated Series - "Magic Adventures"',
      category: 'Animation',
      description: 'Main character voice for children\'s series',
      year: '2024',
    },
    {
      id: 3,
      title: 'Samsung Galaxy Commercial',
      category: 'Commercial',
      description: 'Hindi voiceover for national TV campaign',
      year: '2024',
    },
    {
      id: 4,
      title: 'Netflix Documentary - "Wildlife India"',
      category: 'Narration',
      description: 'English narration for nature documentary',
      year: '2023',
    },
    {
      id: 5,
      title: 'Tech Review Channel - TechGuru',
      category: 'YouTube',
      description: 'Regular voiceover for tech review videos',
      year: '2024',
    },
    {
      id: 6,
      title: 'Corporate Training - Infosys',
      category: 'Corporate',
      description: 'E-learning modules for employee training',
      year: '2024',
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Movie Dubbing': 'from-purple-600 to-pink-600',
      'Animation': 'from-pink-600 to-rose-600',
      'Commercial': 'from-blue-600 to-cyan-600',
      'Narration': 'from-green-600 to-emerald-600',
      'YouTube': 'from-red-600 to-orange-600',
      'Corporate': 'from-indigo-600 to-blue-600',
    };
    return colors || 'from-gray-600 to-gray-800';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Film className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">Portfolio & Previous Work</h2>
          <Button
           onClick={FormToggle}
           variant="outline"
           className="cursor-pointer border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg py-3 transition-all"
          >
           <SquarePen/>
            Add
        </Button>
        {open &&  <FormDialog Comp={PortfolioUploadForm} onClose={()=>FormToggle()}/>}
        </div>
        
        <p className="text-gray-600 mb-8">
          A showcase of recent projects across various industries and formats
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative p-6 h-64 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-white/80 text-sm">{project.year}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg transition-all">
                    <Play className="w-4 h-4" />
                    <span className="text-sm font-medium">Listen</span>
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 font-semibold">
            View Full Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
