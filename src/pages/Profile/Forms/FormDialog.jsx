import React from 'react'
import ProfileSummaryForm from './ProfileSummaryForm'
import { Dialog, DialogContent, DialogDescription,DialogHeader, DialogTitle } from "../../../components/ui/dialog";

const FormDialog = ({onClose,Comp}) => {
  return (
     <>
       <Dialog open={true} onOpenChange={onClose} >
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
       
             
             {/* Profile Form */}
             <div>
                 <Comp/>
             </div>

        
      </DialogContent>
    </Dialog>
     </>
  )
}

export default FormDialog;