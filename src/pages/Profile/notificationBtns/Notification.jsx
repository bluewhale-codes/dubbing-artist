import React from "react";
import { AlertCircleIcon,  CheckCircle2Icon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert"
const Notification = ({ type , message }) => {
 
  return (
    <>
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        {type=="error"&& (<Alert variant="destructive" className="max-w-md w-full">
    <AlertCircleIcon />
    <AlertTitle>Authentication</AlertTitle>
    <AlertDescription>
      {message}
    </AlertDescription>
    
  </Alert>)}


      {type=="success" && (
      <Alert className="max-w-md w-full">
        <CheckCircle2Icon />
        <AlertTitle>Successful</AlertTitle>
        <AlertDescription>
          {message}
        </AlertDescription>
      </Alert>
     
    )}
    </div>
    </>
  );
};

export default Notification;