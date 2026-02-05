import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: JSX.Element;
  role: "ADMIN" | "USER";
}) {
  const userRole = localStorage.getItem("role");

  if (!userRole) return <Navigate to="/" />;
  if (userRole !== role) return <Navigate to="/" />;

  return children;
}
