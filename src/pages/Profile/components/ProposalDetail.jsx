import { useState } from "react";
import { DollarSign ,Calendar, FileText,CheckCircle,MessageCircle,XCircle} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/Button";

export default function ProposalDetail({ proposal, onClose }) {
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Send Proposal</DialogTitle>
          <DialogDescription>
            Submit your proposal for: <span className="font-semibold text-gray-900"></span>
          </DialogDescription>
        </DialogHeader>

            <div>
               {/* Client Details */}
                <div className="px-6 py-4 bg-blue-50/50 border-y border-blue-100">
                    <div className="flex items-center gap-3">
                    <img 
                        src={proposal.client.avatar} 
                        alt={proposal.client.name}
                        className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                    />
                    <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{proposal.client.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                            ⭐ {proposal.client.rating}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span>{proposal.client.projectsPosted} projects</span>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Budget & Timeline Grid */}
                <div className="px-6 py-4 grid grid-cols-2 gap-4">
                    {/* Budget */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-blue-700">Budget</span>
                    </div>
                    <div className="font-bold text-2xl text-blue-900">{proposal.budget}</div>
                    <div className="text-xs text-blue-600 mt-1">{proposal.paymentType}</div>
                    {proposal.isNegotiable && (
                        <span className="inline-block mt-2 px-2 py-0.5 bg-blue-200 text-blue-700 rounded text-xs font-medium">
                        Negotiable
                        </span>
                    )}
                    </div>

                    {/* Timeline */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span className="text-xs font-medium text-gray-700">Timeline</span>
                    </div>
                    <div className="font-bold text-2xl text-gray-900">{proposal.deadline}</div>
                    <div className="text-xs text-gray-600 mt-1">{proposal.duration} audio</div>
                    </div>
                </div>

                {/* Voice Requirements */}
                <div className="px-6 py-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
                    <h5 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Voice Requirements</h5>
                    <div className="flex flex-wrap gap-2">
                    {proposal.voiceRequirements.language.map((lang, index) => (
                        <span key={index} className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-sm text-gray-700 font-medium">
                        🌐 {lang}
                        </span>
                    ))}
                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-sm text-gray-700 font-medium">
                        🎭 {proposal.voiceRequirements.voiceType}
                    </span>
                    <span className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-sm text-gray-700 font-medium">
                        🎵 {proposal.voiceRequirements.tone}
                    </span>
                    </div>
                </div>

                {/* Attachments */}
                {proposal.attachments && proposal.attachments.length > 0 && (
                    <div className="px-6 py-4 border-t border-gray-100">
                    <h5 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Attachments</h5>
                    <div className="flex flex-wrap gap-2">
                        {proposal.attachments.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
                            <FileText className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-700">{file}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                )}
            </div>

          <DialogFooter>
             {proposal.status === 'pending' && (
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
        )} 
          </DialogFooter>
        
      </DialogContent>
    </Dialog>
  );
}
