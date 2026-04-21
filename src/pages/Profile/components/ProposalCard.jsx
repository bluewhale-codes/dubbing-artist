import { useState } from 'react';
import { Clock, DollarSign, FileText, MessageCircle, CheckCircle, XCircle, Calendar, Zap, TrendingUp , Eye} from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import ProposalDetail from './ProposalDetail';
import ContractForm from './ContractForm';
import FormDialog from '../Forms/FormDialog';
import { useNavigate } from 'react-router';
export function ProposalCard({ proposal, onAccept, onReject, onMessage }) {
  const [open,setOpen] = useState(false);
  const [open2,setOpen2] = useState(false);
  const navigate = useNavigate();
 const FormToggle = ()=>{
        setOpen2(!open2);
   }



  const getStatusColor = (status) => {
    
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'ACCEPTED': return 'bg-green-100 text-green-700 border-green-300';
      case 'REJECTED': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Cartoon': 'bg-purple-100 text-purple-700',
      'Narration': 'bg-blue-100 text-blue-700',
      'Commercial': 'bg-green-100 text-green-700',
      'Audiobook': 'bg-orange-100 text-orange-700',
      'Character': 'bg-pink-100 text-pink-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const timeAgo = (date) => {
          const now = new Date();
          const seconds = Math.floor((now - new Date(date)) / 1000);

          const minutes = Math.floor(seconds / 60);
          const hours = Math.floor(seconds / 3600);
          const days = Math.floor(seconds / 86400);

          if (seconds < 60) return `${seconds} seconds ago`;
          if (minutes < 60) return `${minutes} minutes ago`;
          if (hours < 24) return `${hours} hours ago`;
          return `${days} days ago`;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Header with Status and Urgency */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(proposal.status)}`}>
              {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
            </span>
            {/* {proposal.isUrgent && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-300 flex items-center gap-1 animate-pulse">
                <Zap className="w-3 h-3" />
                Urgent
              </span>
            )} */}
          </div>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {timeAgo(proposal.createdAt)}
            
          </span>
        </div>

        {/* Match Score */}
        {proposal.matchScore && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              {/* <span className="text-sm font-medium text-blue-600">{proposal.matchScore}% Match</span> */}
              <span className="text-sm font-medium text-blue-600">78% Match</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              {/* <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${proposal.matchScore}%` }}
              /> */}
              
            </div>
          </div>
        )}

        {/* Project Information */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{proposal.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">{proposal.message}</p>
          <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium ${getCategoryColor(proposal.category)}`}>
            {proposal.category}
           
          </span>
        </div>
      </div>

     

      {/* Action Buttons */}
      <div className="px-6 py-5 bg-gray-50 flex gap-3">
        {/* <Button onclick={()=>alert("Hello world")} variant="outline"  size="sm">
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button> */}
        <button className="cursor-pointer"onClick={()=>setOpen(true)}>
          View Detail
        </button>
        <button className="cursor-pointer" onClick={()=>setOpen2(true)}>
          Create Contract
        </button>
        <Button className="cursor-pointer" onClick={()=>navigate(`/auth/contract/${proposal.project}`)}>
          view Contract
        </Button>
        {open==true && <ProposalDetail proposal={proposal} onClose={()=>setOpen(false)}/>}

          {open2 && <FormDialog Comp={ContractForm} id={proposal._id} onClose={()=>FormToggle()}/>}
        {/* {proposal.status === 'pending' && (
          <>
            <button 
              onClick={() => onAccept(proposal.id)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <CheckCircle className="w-4 h-4" />
              Accept
            </button>
            <button 
              onClick={() => onMessage(proposal.id)}
              className="flex-1 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Message
            </button>
            <button 
              onClick={() => onReject(proposal.id)}
              className="bg-white border-2 border-red-300 text-red-600 hover:bg-red-50 font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </>
        )}
        {proposal.status === 'accepted' && (
          <button 
            onClick={() => onMessage(proposal.id)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Message Client
          </button>
        )}
        {proposal.status === 'rejected' && (
          <div className="flex-1 text-center py-3 text-gray-500 text-sm">
            This proposal was rejected
          </div>
        )} */}
      </div> 
       
    </div>
  );
}
