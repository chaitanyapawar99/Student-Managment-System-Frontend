import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Users, 
  LayoutDashboard, 
  LogOut, 
  GraduationCap,
  Shield,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function DashboardSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.role === 'ADMIN';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = isAdmin
    ? [
        { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
        { to: '/admin/students', icon: Users, label: 'Students' },
      ]
    : [
        { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { to: '/dashboard/students', icon: Users, label: 'Students' },
      ];

  return (
    <aside className="flex h-screen w-64 flex-col bg-sidebar text-sidebar-foreground">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <GraduationCap className="h-8 w-8 text-sidebar-primary" />
        <span className="text-xl font-bold">StudentHub</span>
      </div>

      {/* User Info */}
      <div className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-accent">
            {isAdmin ? (
              <Shield className="h-5 w-5 text-sidebar-primary" />
            ) : (
              <User className="h-5 w-5 text-sidebar-primary" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium">{user?.email}</p>
            <p className="text-xs text-sidebar-muted">
              {isAdmin ? 'Administrator' : 'User'}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/admin' || item.to === '/dashboard'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-primary'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-sidebar-border p-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-destructive"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
