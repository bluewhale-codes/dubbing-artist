
import { Breadcrumb } from "./Components/Breadcrumb";
import { PageHeader } from './Components/PageHeader';
import { LanguageFilter } from './Components/LanguageFilter';
import { FilterBar } from './Components/FilterBar';
import { ServiceGrid } from './Components/ServiceGrid';
import { Pagination } from './Components/Pagination';

import { mockServices } from './Components/mockData';

export default function ArtistsList() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Page Header with Title and Rating */}
        <PageHeader />

        {/* Language Filter */}
        <LanguageFilter />

        {/* Filter Bar */}
        <FilterBar />

        {/* Service Grid */}
        <ServiceGrid services={mockServices} />

        {/* Pagination */}
        <Pagination />
      </main>

    
    </div>
  );
}
