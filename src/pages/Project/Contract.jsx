import { ArrowLeft, CheckCircle, Clock, FileText, Mail, MessageSquare, Upload, DollarSign, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { getContract } from '../../store/actions';
import { useParams } from 'react-router';

export default function Contract() {

  const dispatch = useDispatch();
  const {id} = useParams();

  const {contract , loading} = useSelector((state)=>state.profileSlice);
  console.log(contract);
  const contractData = {
    jobTitle: "Modern E-Commerce Website Design",
    status: "ACTIVE",
    fixedPrice: 2500,
    deadline: "May 15, 2026",
    client: {
      name: "Sarah Johnson",
      email: "sarah.j@techstartup.com",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    artist: {
      name: "Alex Martinez",
      email: "alex.design@creative.io",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    agreedPrice: 2500,
    deliveryTime: 14,
    scopeOfWork: "Design and develop a modern, responsive e-commerce website with clean UI/UX. The website should include a homepage, product listing pages, product detail pages, shopping cart, and checkout flow. The design should be mobile-first and follow modern design principles.",
    requirements: "Figma design files, responsive layouts for mobile/tablet/desktop, interactive prototypes, source files (HTML/CSS/React components)",
    currentRevisions: 0,
    maxRevisions: 2,
    paymentStatus: "In Escrow",
    submission: null
  };

  useEffect(()=>{
     dispatch(getContract(id));
  },[dispatch])
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-12">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-lg text-gray-600">Contract Details</h1>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{contract?.project?.project_title}</h2>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <CheckCircle className="w-4 h-4 mr-1.5" />
                  {contract.status}
                </span>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="font-semibold">${contract?.agreedPrice}</span>
                  <span className="ml-1 text-sm">Fixed Price</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  {/* <span className="text-sm">Deadline: {contractData.deadline}</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8">
        {/* Client & Artist Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Client Card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Client</h3>
            <div className="flex items-center gap-4">
              <img
                src={contract?.client?.clientAvatar}
                alt={contract?.client?.clientAvatar}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
              />
              <div>
                <h4 className="font-bold text-lg text-gray-900">{contract?.client?.name}</h4>
                <div className="flex items-center text-gray-600 mt-1">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{contract?.client?.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Artist Card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Artist / Freelancer</h3>
            <div className="flex items-center gap-4">
              <img
                src={contract?.artist?.artistAvatar}
                alt={contract?.artist?.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-100"
              />
              <div>
                <h4 className="font-bold text-lg text-gray-900">{contract?.artist?.name}</h4>
                <div className="flex items-center text-gray-600 mt-1">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{contract?.artist?.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Overview Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contract Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
              <div className="p-2 bg-blue-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Agreed Price</p>
                <p className="text-2xl font-bold text-gray-900">${contract?.agreedPrice}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Delivery Time</p>
                <p className="text-2xl font-bold text-gray-900">{contract?.deliveryDays} days</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Deadline</p>
                {/* <p className="text-2xl font-bold text-gray-900">{contractData.deadline}</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Scope of Work Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Scope of Work</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Description</h4>
              <p className="text-gray-700 leading-relaxed">{contract?.scopeOfWork}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Requirements</h4>
              <p className="text-gray-700 leading-relaxed font-medium">{contract?.requirements}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Submission Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Submission</h3>

            {contract.submissionUrl ? (
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 mb-4">
                <FileText className="w-12 h-12 text-blue-500 mb-2" />
                <p className="text-sm text-gray-600">File submitted</p>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center mb-4 bg-gray-50">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">No submission yet</p>
                <p className="text-sm text-gray-400 mt-1">Waiting for the artist to submit work</p>
              </div>
            )}

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Submit Work
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Upload className="w-5 h-5" />
                Upload File
              </button>
            </div>
          </div>

          {/* Revisions & Payment Section */}
          <div className="space-y-6">
            {/* Revisions */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revisions</h3>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Revisions Used</span>
                  <span className="text-sm font-medium text-gray-500">{contract?.revisionCount} / {contract?.maxRevisions}</span>
                </div>
                <div className="w-full bg-white rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300"
                    style={{ width: `${(contract?.revisionCount / contract?.maxRevisions) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  {contract?.maxRevisions - contract?.revisionCount} revisions remaining
                </p>
              </div>
            </div>

            {/* Payment Status */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Status</h3>
              <div className="bg-green-50 rounded-xl p-4 mb-4 border border-green-100">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-900">{contract?.paymentStatus}</span>
                </div>
                <p className="text-sm text-green-700 ml-7">Funds are secured and will be released upon approval</p>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Approve Work
                </button>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5" />
                  Request Revisions
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
