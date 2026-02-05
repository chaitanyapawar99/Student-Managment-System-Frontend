import { useState, useEffect } from 'react';
import { Student, CreateStudentData } from '@/types/student';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface StudentFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  student?: Student | null;
  onSubmit: (data: CreateStudentData) => Promise<void>;
  isLoading?: boolean;
}

export function StudentFormDialog({
  open,
  onOpenChange,
  student,
  onSubmit,
  isLoading,
}: StudentFormDialogProps) {
  const [formData, setFormData] = useState<CreateStudentData>({
    name: '',
    email: '',
    course: '',
    enrollmentDate: new Date().toISOString().split('T')[0],
  });

  // Reset form when dialog opens with student data
  useEffect(() => {
    if (open) {
      if (student) {
        setFormData({
          name: student.name,
          email: student.email,
          course: student.course,
          enrollmentDate: student.enrollmentDate.split('T')[0],
        });
      } else {
        setFormData({
          name: '',
          email: '',
          course: '',
          enrollmentDate: new Date().toISOString().split('T')[0],
        });
      }
    }
  }, [open, student]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const isEditing = !!student;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Student' : 'Add New Student'}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? 'Update the student information below.'
              : 'Fill in the details to add a new student.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Input
              id="course"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              placeholder="Computer Science"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enrollmentDate">Enrollment Date</Label>
            <Input
              id="enrollmentDate"
              type="date"
              value={formData.enrollmentDate}
              onChange={(e) => setFormData({ ...formData, enrollmentDate: e.target.value })}
              required
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {isEditing ? 'Updating...' : 'Adding...'}
                </span>
              ) : isEditing ? (
                'Update Student'
              ) : (
                'Add Student'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
