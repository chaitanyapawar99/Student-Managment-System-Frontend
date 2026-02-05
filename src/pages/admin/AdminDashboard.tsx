import { useEffect, useState } from "react";
import axios from "axios";

type Student = {
  id?: number;
  name: string;
  email: string;
  age: number | "";
};

export default function AdminDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState<Student>({
    name: "",
    email: "",
    age: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const load = async () => {
    const res = await axios.get("http://localhost:8080/students");
    setStudents(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async () => {
    if (!form.name || !form.email || !form.age) {
      alert("Fill all fields");
      return;
    }

    const payload = {
      name: form.name,
      email: form.email,
      age: Number(form.age),
    };

    if (editingId) {
      await axios.put(`http://localhost:8080/students/${editingId}`, payload);
    } else {
      await axios.post("http://localhost:8080/students", payload);
    }

    setForm({ name: "", email: "", age: "" });
    setEditingId(null);
    load();
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/classroom.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/60 p-8 text-white flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Form (fixed height) */}
        <div className="bg-white/90 backdrop-blur-lg text-black p-6 rounded-2xl shadow-xl mb-4">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Update Student" : "Add Student"}
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <input
              className="border p-2 rounded"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="border p-2 rounded"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="number"
              className="border p-2 rounded"
              placeholder="Age"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
          </div>

          <button
            onClick={submit}
            className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 bg-white/90 backdrop-blur-lg text-black rounded-2xl shadow-xl overflow-y-auto scroll-smooth">
          {students.map((s, index) => (
            <div
              key={s.id}
              className={`flex justify-between items-center p-4 ${
                index !== students.length - 1 ? "border-b" : ""
              }`}
            >
              <span>
                {s.name} | {s.email} | Age: {s.age}
              </span>

              <div className="space-x-2">
                <button
                  onClick={() => {
                    setForm({
                      name: s.name,
                      email: s.email,
                      age: s.age,
                    });
                    setEditingId(s.id!);
                  }}
                  className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    axios
                      .delete(`http://localhost:8080/students/${s.id}`)
                      .then(load)
                  }
                  className="bg-rose-500 text-white px-3 py-1 rounded hover:bg-rose-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
