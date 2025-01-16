import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/db";

const PrivateRoute = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
