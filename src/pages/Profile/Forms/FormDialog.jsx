import React from 'react'
import ProfileSummaryForm from './ProfileSummaryForm'
import { Dialog, DialogContent, DialogDescription,DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { useSelector } from 'react-redux';
import Notification from '../notificationBtns/Notification';
const FormDialog = ({onClose,Comp}) => {

  const {notification}=useSelector((state)=>state.profileSlice);
  return (
     <>
       <Dialog className="" open={true} onOpenChange={onClose} >
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
       
             
             {/* Profile Form */}
             <div>
                 {notification ? <Notification error={error} type="error"/> : <Comp/>}
                 
             </div>

        
      </DialogContent>
    </Dialog>
     </>
  )
}

export default FormDialog;