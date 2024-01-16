import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div
        className="radial-progress"
        style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}
        role="progressbar"
      >
        70%
      </div>
    );
  }

  if (!isLoading && !user?.email) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
