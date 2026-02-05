import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <h3>🎓 Student Portal</h3>
      <button className="logout" onClick={logout}>Logout</button>
    </div>
  );
}
