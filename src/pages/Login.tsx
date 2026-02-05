import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // DEMO USERS
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("role", "ADMIN");
      navigate("/admin");
      return;
    }

    if (email === "user@gmail.com" && password === "user123") {
      localStorage.setItem("role", "USER");
      navigate("/user");
      return;
    }

    setError("Invalid email or password");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/school.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/60 flex justify-center items-center">
        {/* Glass Card */}
        <form
          onSubmit={login}
          className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>

          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
          )}

          <input
            className="border p-2 w-full mb-3 rounded"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="border p-2 w-full mb-4 rounded"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
