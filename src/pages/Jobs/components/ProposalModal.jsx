import { useState ,useEffect} from "react";
import { X, Upload, DollarSign, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/Button";
import Loader from "../notificationBtn/Loader";
import axios from "axios";
import Notification from "../notificationBtn/Notification";
import { useDispatch,useSelector } from "react-redux";
import { createProposal } from "../../../store/actions";
import { resetNotification } from "../../../store/profileSlice";
export default function ProposalModal({ project, onClose }) {
  const [formData, setFormData] = useState({
    customPrice: project.budget.max,
    deliveryDays: 3,
    message: "",
    demoFile: null,

  });

  const dispatch = useDispatch();
  const {loading , notification} = useSelector((state)=>state.profileSlice);

  const handleSubmit = async () => {
 
    
    const data = new FormData();
    Object.keys(formData).forEach((key)=>{
       data.append(key,formData[key])
    })
    data.append("receiver",project.user);
    data.append("project",project._id)

    dispatch(createProposal(data));
    // try {
    //       console.log("Request start")
    //       const res = await axios.post('http://localhost:3000/profile/create-proposal',data,{withCredentials:true})
    //       console.log(res.data);
    // } catch (error) {
    //    console.log(error.response.data);
    // }
     
    
  };

  useEffect(()=>{
    setTimeout(() => {
        dispatch(resetNotification())
      }, 7000);
  },[notification])

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Send Proposal</DialogTitle>
          <DialogDescription>
            Submit your proposal for: <span className="font-semibold text-gray-900">{project.title}</span>
          </DialogDescription>
        </DialogHeader>
      
        <div className="relative">
          {notification.type!==null && <Notification type={notification.type} message={notification.message}/> } 
          {loading && <Loader/>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Summary */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Word Count:</span>
              {/* <span className="font-medium">{project.wordCount} words</span> */}
              <span className="font-medium">34 words</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Client Budget:</span>
              <span className="font-medium text-green-600">${project.budget.max}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">License Type:</span>
              {/* <span className="font-medium">{project.licenseType}</span> */}
              <span className="font-medium">Brodcast</span>
            </div>
          </div>

          {/* Custom Price */}
          <div>
            <Label htmlFor="customPrice">Your Price (Optional)</Label>
            <div className="relative mt-1">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="customPrice"
                type="number"
                className="pl-9"
                value={formData.customPrice}
                onChange={(e) => setFormData({ ...formData, customPrice: e.target.value })}
                placeholder={project.budget}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Leave at suggested price or propose your own
            </p>
          </div>

          {/* Delivery Time */}
          <div>
            <Label htmlFor="deliveryDays">Delivery Time (Days) *</Label>
            <div className="relative mt-1">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="deliveryDays"
                type="number"
                className="pl-9"
                min="1"
                value={formData.deliveryDays}
                onChange={(e) => setFormData({ ...formData, deliveryDays: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Message to Client *</Label>
            <div className="relative mt-1">
              <Textarea
                id="message"
                placeholder="Introduce yourself and explain why you're the perfect fit for this project..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Personalized messages increase your chances of getting hired
            </p>
          </div>

          {/* Demo Upload */}
          <div>
            <Label htmlFor="demo">Upload Demo / Audition (Optional)</Label>
            <div className="mt-1">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">MP3 or WAV (max 10MB)</p>
                <input
                  id="demo"
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={(e) => setFormData({ ...formData, demoFile: e.target.files[0] })}
                />
              </div>
              {formData.demoFile && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected: {formData.demoFile.name}
                </p>
              )}
            </div>
          </div>

          <DialogFooter>
            
            
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
              Submit Proposal
            </Button>
          
          </DialogFooter>
        </form>
        </div>
        
      </DialogContent>
    </Dialog>
  );
}
