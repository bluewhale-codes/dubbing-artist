import React from "react";
import { AlertCircleIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert"
const Notification = ({ error, type }) => {
  if (!error) return null;

  return (
    <>
      {type=="error" && (<Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Authentication</AlertTitle>
      <AlertDescription>
       {error}
      </AlertDescription>
    </Alert>)}
    </>
  );
};

export default Notification;