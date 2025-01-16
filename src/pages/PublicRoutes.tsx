import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/db";

const PublicRoute = ({ children }: any) => {
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

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
