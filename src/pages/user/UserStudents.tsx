import { useEffect, useState } from 'react';
import { Student, CreateStudentData } from '@/types/student';
import { getStudents, createStudent } from '@/services/studentService';
import { StudentTable } from '@/components/students/StudentTable';
import { StudentFormDialog } from '@/components/students/StudentFormDialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Search, RefreshCw, UserPlus } from 'lucide-react';

export default function UserStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    loadStudents();
  }, []);

  // Filter students based on search query
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = students.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.email.toLowerCase().includes(query) ||
        s.course.toLowerCase().includes(query)
    );
    setFilteredStudents(filtered);
  }, [searchQuery, students]);

  const loadStudents = async () => {
    setIsLoading(true);
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load students. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddClick = () => {
    setFormDialogOpen(true);
  };

  const handleFormSubmit = async (data: CreateStudentData) => {
    setIsSubmitting(true);
    try {
      await createStudent(data);
      toast({
        title: 'Success',
        description: 'Your information has been added successfully.',
      });
      setFormDialogOpen(false);
      loadStudents();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Failed to add information.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-slide-in space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Students</h1>
          <p className="text-muted-foreground">View student records and add your information</p>
        </div>
        <Button onClick={handleAddClick} className="gap-2">
          <UserPlus className="h-4 w-4" />
          Add My Information
        </Button>
      </div>

      {/* Search and Refresh */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or course..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" onClick={loadStudents} disabled={isLoading} className="gap-2">
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      ) : (
        <StudentTable students={filteredStudents} isAdmin={false} />
      )}

      {/* Add Information Dialog */}
      <StudentFormDialog
        open={formDialogOpen}
        onOpenChange={setFormDialogOpen}
        onSubmit={handleFormSubmit}
        isLoading={isSubmitting}
      />
    </div>
  );
}
