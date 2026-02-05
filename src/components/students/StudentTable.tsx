import { Student } from '@/types/student';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

interface StudentTableProps {
  students: Student[];
  isAdmin?: boolean;
  onEdit?: (student: Student) => void;
  onDelete?: (student: Student) => void;
}

export function StudentTable({ students, isAdmin, onEdit, onDelete }: StudentTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Enrollment Date</TableHead>
            {isAdmin && <TableHead className="w-24 text-right">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.length === 0 ? (
            <TableRow>
              <TableCell colSpan={isAdmin ? 6 : 5} className="h-24 text-center text-muted-foreground">
                No students found.
              </TableCell>
            </TableRow>
          ) : (
            students.map((student) => (
              <TableRow key={student.id} className="animate-fade-in">
                <TableCell className="font-medium">{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>
                  <span className="inline-flex rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {student.course}
                  </span>
                </TableCell>
                <TableCell>
                  {format(new Date(student.enrollmentDate), 'MMM dd, yyyy')}
                </TableCell>
                {isAdmin && (
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEdit?.(student)}
                        className="h-8 w-8 text-muted-foreground hover:text-primary"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDelete?.(student)}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
