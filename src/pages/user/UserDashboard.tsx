import { useState } from "react";
import axios from "axios";

export default function UserDashboard() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const submit = async () => {
    await axios.post("http://localhost:8080/students", {
      ...form,
      age: Number(form.age),
    });
    alert("Details saved successfully!");
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/student.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/50 flex flex-col">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-6 text-white">
          <h2 className="text-2xl font-bold">User Dashboard</h2>
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Centered Card */}
        <div className="flex flex-1 justify-center items-center">
          <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-2xl w-96">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Your Profile
            </h3>

            <input
              className="border p-2 w-full mb-3 rounded"
              placeholder="Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="border p-2 w-full mb-3 rounded"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              className="border p-2 w-full mb-4 rounded"
              placeholder="Age"
              type="number"
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />

            <button
              onClick={submit}
              className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
            >
              Save Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
