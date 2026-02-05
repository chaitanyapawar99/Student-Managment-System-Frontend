export interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
  enrollmentDate: string;
}

export interface CreateStudentData {
  name: string;
  email: string;
  course: string;
  enrollmentDate: string;
}

export interface UpdateStudentData extends CreateStudentData {
  id: number;
}
