import { Navigate } from "react-router";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
 const {isAuthenticated} = useSelector((state)=>state.profileSlice);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;