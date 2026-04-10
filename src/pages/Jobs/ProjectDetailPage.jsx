import { 
  FileText, 
  Briefcase, 
  Mic, 
  Languages, 
  Users, 
  Clock, 
  DollarSign, 
  Calendar,
  FileAudio,
  Globe,
  Play,
  Download,
  Copy,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

import { useState , useEffect} from 'react';
import { useParams } from 'react-router';
import { getProjectDetail } from '../../store/actions';
import { useDispatch, useSelector} from 'react-redux';
import Loader from "./notificationBtn/Loader"
const ProjectDetailPage = () => {
  const [isAdditionalExpanded, setIsAdditionalExpanded] = useState(true);
  const [isMediaExpanded, setIsMediaExpanded] = useState(true);
  


  const {loading,project} = useSelector((state)=>state.profileSlice);
  const dispatch = useDispatch();
  const {id} = useParams();
  // Project data
  const projectData = {
  title: "YouTube Product Promo Voiceover",
  category: "YouTube Video",
  status: "Open",
  description: "Looking for a professional female voice artist to deliver a high-quality voiceover for a YouTube product promotion video.",
  industry: "E-commerce / Product Marketing",
  language: "German",
  accent: "Standard German",
  gender: "Female",
  voiceAgeRange: { min: 18, max: 25, label: "Young (18–25)" },
  voiceStyle: ["Corporate", "Storytelling"],
  audioUrl: "https://res.cloudinary.com/demo/video/upload/v1/samples/sea-turtle.mp4",
  usage: ["TV Commercial", "Internal Company Use"],
  region: "Worldwide",
  duration: 8,
  pricingModel: "Per Word",
  deliverySpeed: "Custom",
  deadline: "2026-05-15",
  revisions: 2,
  fileFormat: "WAV",
  audioQuality: "44.1 kHz",
  additionalInstructions:
    "Ensure a clear, engaging, and professional tone suitable for product marketing. Maintain consistent pacing and high audio clarity throughout the recording."
};

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('URL copied to clipboard!');
  };

  const downloadAudio = () => {
    window.open(project?.details?.referenceAudio.url, '_blank');
  };

  useEffect(()=>{
    dispatch(getProjectDetail(id));
  },[id])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transition-all duration-300 hover:shadow-xl">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                    {project?.details?.category}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                    {/* {projectData.status} */}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {project?.details?.title}
                </h1>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors duration-200 backdrop-blur-sm"
                >
                  <Copy className="w-4 h-4" />
                  <span className="hidden sm:inline">Copy Link</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Overview */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Project Overview</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-1">Description</label>
                  <p className="text-gray-900">{project?.details?.projectDescription}</p>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <label className="text-sm font-medium text-gray-500">Industry:</label>
                  <span className="text-gray-900 font-medium">{project?.details?.industryType}</span>
                </div>
              </div>
            </div>

            {/* Voice Requirements */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Mic className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Voice Requirements</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-2">
                    <Languages className="w-4 h-4" />
                    Language
                  </label>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    {project?.details?.language}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4" />
                    Accent
                  </label>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200">
                    {project?.details?.accent}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4" />
                    Gender
                  </label>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200">
                    {project?.details?.gender}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4" />
                    Age Range
                  </label>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-green-50 text-green-700 border border-green-200">
                    {project?.details?.voiceAgeRange}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <label className="text-sm font-medium text-gray-500 block mb-2">Voice Style & Tone</label>
                <div className="flex flex-wrap gap-2">
                  {project?.details?.voiceStyleTone.map((style, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Media Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div 
                className="flex items-center justify-between p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMediaExpanded(!isMediaExpanded)}
              >
                <div className="flex items-center gap-2">
                  <FileAudio className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Reference Audio</h2>
                </div>
                {isMediaExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
              {isMediaExpanded && (
                <div className="p-6 pt-0">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 mb-4">
                    <audio
                      controls
                      className="w-full"
                      style={{ height: '40px' }}
                    >
                      <source src={project?.details?.referenceAudio.url} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Format:</span> {project?.details?.fileFormat}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Quality:</span> {project?.details?.audioQuality}
                      </span>
                    </div>
                    <button
                      onClick={downloadAudio}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Usage Details */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Usage Details</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-2">Usage Types</label>
                  <div className="flex flex-wrap gap-2">
                    {project?.details?.usage.map((use, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-200"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-500 block">Region</label>
                      <span className="text-gray-900 font-medium">{project?.details?.region}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-500 block">Duration</label>
                      <span className="text-gray-900 font-medium">{project?.details?.usageDuration.value} {project?.details?.usageDuration.unit}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing & Additional */}
          <div className="space-y-6">
            {/* Pricing & Delivery */}
            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg sticky top-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Pricing & Delivery</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                  <label className="text-sm font-medium text-blue-600 block mb-1">Pricing Model</label>
                  <p className="text-2xl font-bold text-blue-900">{project?.details?.pricingModel}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <label className="text-sm font-medium text-gray-500">Delivery Speed</label>
                    <span className="text-gray-900 font-medium capitalize">{project?.details?.deliverySpeed}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <label className="text-sm font-medium text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Deadline
                    </label>
                    <span className="text-gray-900 font-medium text-right text-sm">
                      {formatDate(project?.details?.deadlineDate)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <label className="text-sm font-medium text-gray-500">Revisions</label>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {project?.details?.revisions} included
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <label className="text-sm font-medium text-gray-500">File Format</label>
                    <span className="text-gray-900 font-medium">{project?.details?.fileFormat}</span>
                  </div>
                </div>
                <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Send Proposal
                </button>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div 
                className="flex items-center justify-between p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setIsAdditionalExpanded(!isAdditionalExpanded)}
              >
                <h2 className="text-xl font-semibold text-gray-900">Additional Details</h2>
                {isAdditionalExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
              {isAdditionalExpanded && (
                <div className="p-6 pt-0">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="text-sm font-medium text-gray-500 block mb-2">Additional Instructions</label>
                    <p className="text-gray-900 leading-relaxed">{project?.details?.additionalInstructions}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
