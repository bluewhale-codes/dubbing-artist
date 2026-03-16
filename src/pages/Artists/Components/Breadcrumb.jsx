import { ChevronRight } from 'lucide-react';

export  function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
        Home
      </a>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
        Music & Audio
      </a>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span className="text-gray-900 font-medium">Voice Over</span>
    </nav>
  );
}
