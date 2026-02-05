import { api } from "@/lib/axios";
import { Student } from "@/types/student";

export const getStudents = async () => {
  const res = await api.get<Student[]>("/students");
  return res.data;
};

export const createStudent = async (student: Omit<Student, "id">) => {
  const res = await api.post<Student>("/students", student);
  return res.data;
};

export const updateStudent = async (id: number, student: Student) => {
  const res = await api.put<Student>(`/students/${id}`, student);
  return res.data;
};

export const deleteStudent = async (id: number) => {
  await api.delete(`/students/${id}`);
};
