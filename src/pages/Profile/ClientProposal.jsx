import { useState } from 'react';
import { ProposalCard } from './components/ProposalCard';
import { Filter, Search } from 'lucide-react';
import {Button} from "../../components/ui/Button"
import { ChevronLeft } from 'lucide-react';
import logoVideo from "../../components/vedio/logo.mp4"
import { useNavigate } from 'react-router';

// Mock data for proposals
const mockProposals = [
  {
    id: 1,
    title: 'Energetic Voice for Cartoon Series',
    description: 'Looking for an energetic and playful voice artist for a children\'s cartoon series. The character is a young adventurous girl exploring magical worlds.',
    category: 'Cartoon',
    client: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 4.9,
      projectsPosted: 23
    },
    budget: '₹5,000',
    paymentType: 'Per Episode',
    isNegotiable: true,
    deadline: '5 days',
    duration: '10 min',
    voiceRequirements: {
      language: ['Hindi', 'English'],
      voiceType: 'Female',
      tone: 'Energetic'
    },
    attachments: ['Script_Episode1.pdf', 'Character_Reference.mp3'],
    status: 'pending',
    timeAgo: '2 hours ago',
    isUrgent: true,
    matchScore: 95
  },
  {
    id: 2,
    title: 'Professional Narration for Corporate Video',
    description: 'We need a professional, trustworthy voice for our company\'s annual report video. The tone should be authoritative yet warm.',
    category: 'Commercial',
    client: {
      name: 'Tech Innovations Ltd',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 4.7,
      projectsPosted: 15
    },
    budget: '₹3,500',
    paymentType: 'Fixed Price',
    isNegotiable: false,
    deadline: '3 days',
    duration: '5 min',
    voiceRequirements: {
      language: ['English'],
      voiceType: 'Male',
      tone: 'Professional'
    },
    attachments: ['Script.pdf'],
    status: 'pending',
    timeAgo: '5 hours ago',
    isUrgent: false,
    matchScore: 88
  },
  {
    id: 3,
    title: 'Audiobook Narration - Romance Novel',
    description: 'Seeking a warm, emotional voice for a romance audiobook. Must be able to convey deep emotions and bring characters to life.',
    category: 'Audiobook',
    client: {
      name: 'Publishing House Pro',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5.0,
      projectsPosted: 8
    },
    budget: '₹12,000',
    paymentType: 'Per Hour',
    isNegotiable: true,
    deadline: '14 days',
    duration: '4 hours',
    voiceRequirements: {
      language: ['Hindi'],
      voiceType: 'Female',
      tone: 'Emotional'
    },
    attachments: ['Sample_Chapter.pdf', 'Style_Guide.pdf'],
    status: 'accepted',
    timeAgo: '1 day ago',
    matchScore: 92
  },
  {
    id: 4,
    title: 'Character Voices for Mobile Game',
    description: 'Need multiple character voices for an action RPG mobile game. Looking for versatile voice actors who can do different character types.',
    category: 'Character',
    client: {
      name: 'GameDev Studios',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 4.8,
      projectsPosted: 31
    },
    budget: '₹8,000',
    paymentType: 'Per Character',
    isNegotiable: true,
    deadline: '7 days',
    duration: '15 min',
    voiceRequirements: {
      language: ['English'],
      voiceType: 'Male / Female',
      tone: 'Versatile'
    },
    attachments: ['Character_Descriptions.pdf', 'Game_Trailer.mp4'],
    status: 'pending',
    timeAgo: '3 hours ago',
    isUrgent: true,
    matchScore: 85
  },
  {
    id: 5,
    title: 'Documentary Narration - Wildlife Series',
    description: 'Looking for a calm, authoritative voice for a wildlife documentary series. Similar to David Attenborough style.',
    category: 'Narration',
    client: {
      name: 'Nature Films Inc',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 4.6,
      projectsPosted: 12
    },
    budget: '₹6,500',
    paymentType: 'Per Episode',
    isNegotiable: false,
    deadline: '10 days',
    duration: '20 min',
    voiceRequirements: {
      language: ['English', 'Hindi'],
      voiceType: 'Male',
      tone: 'Calm & Authoritative'
    },
    attachments: ['Episode1_Script.pdf'],
    status: 'pending',
    timeAgo: '6 hours ago',
    matchScore: 78
  },
  {
    id: 6,
    title: 'Radio Commercial for New Product Launch',
    description: 'Need an upbeat, persuasive voice for a 30-second radio commercial promoting our new smartphone.',
    category: 'Commercial',
    client: {
      name: 'BrandMakers Agency',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      rating: 4.9,
      projectsPosted: 45
    },
    budget: '₹2,500',
    paymentType: 'Fixed Price',
    isNegotiable: false,
    deadline: '2 days',
    duration: '30 sec',
    voiceRequirements: {
      language: ['Hindi'],
      voiceType: 'Female',
      tone: 'Upbeat'
    },
    attachments: ['Script.pdf', 'Brand_Guidelines.pdf'],
    status: 'rejected',
    timeAgo: '2 days ago',
    matchScore: 82
  }
];

export default function ClientProposal() {
  const [proposals, setProposals] = useState(mockProposals);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleAccept = (id) => {
    setProposals(proposals.map(p => 
      p.id === id ? { ...p, status: 'accepted' } : p
    ));
    // You could show a toast notification here
    console.log(`Proposal ${id} accepted! Auto-message: "Hi, I'd love to work on this project!"`);
  };

  const handleReject = (id) => {
    setProposals(proposals.map(p => 
      p.id === id ? { ...p, status: 'rejected' } : p
    ));
  };

  const handleMessage = (id) => {
    console.log(`Opening message dialog for proposal ${id}`);
    // This would open a message modal/dialog
  };

  // Filter proposals
  const filteredProposals = proposals.filter(proposal => {
    const matchesStatus = filterStatus === 'all' || proposal.status === filterStatus;
    const matchesSearch = proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         proposal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Count proposals by status
  const pendingCount = proposals.filter(p => p.status === 'pending').length;
  const acceptedCount = proposals.filter(p => p.status === 'accepted').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className='flex'>
                <div className="">
                    <video
                        className="w-[200px] h-[60px]"
                        src={logoVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/assets/logo-poster.jpg" // Optional fallback image
                    />
                </div>
                <div>
                    <h1 className="text-1xl font-bold text-gray-900">Client Proposals</h1>
                    <p className="text-gray-600 mt-1">
                        {pendingCount} pending • {acceptedCount} accepted
                    </p>
                </div>
            </div>
            
            {/* Search Bar */}
            <div>
                
                <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                        type="text"
                        placeholder="Search proposals..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2.5 w-full sm:w-80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        /> 
                </div>
                
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
                <div>
                    
                   <Button onClick={()=>navigate(-1)}  className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30">
                        <ChevronLeft/> Profile
                   </Button>
                </div>
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                filterStatus === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Proposals ({proposals.length})
            </button>
            <button
              onClick={() => setFilterStatus('pending')}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                filterStatus === 'pending'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Pending ({pendingCount})
            </button>
            <button
              onClick={() => setFilterStatus('accepted')}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                filterStatus === 'accepted'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Accepted ({acceptedCount})
            </button>
            <button
              onClick={() => setFilterStatus('rejected')}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                filterStatus === 'rejected'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Rejected
            </button>
          </div>
        </div>
      </div>

      {/* Proposals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProposals.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No proposals found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProposals.map(proposal => (
              <ProposalCard
                key={proposal.id}
                proposal={proposal}
                onAccept={handleAccept}
                onReject={handleReject}
                onMessage={handleMessage}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 rounded-xl p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Quick Tips</h4>
              <p className="text-gray-700 text-sm">
                • Review proposals carefully before accepting • Message clients for clarification if needed • 
                Urgent proposals expire faster • Your match score is based on your profile and past work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
