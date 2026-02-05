import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from './DashboardSidebar';

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto bg-background">
        <div className="container py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
