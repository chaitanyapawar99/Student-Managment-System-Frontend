import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-8">Student Portal</h2>

        <button
          className="w-full bg-red-500 text-white py-2 rounded"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
