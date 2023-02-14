import { useEffect } from "react";
import { loadStudentsActionCreator } from "../../store/features/students/studentsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { StudentsStructure } from "../../types";
import StudentCard from "../StudentCard/StudentCard";
import "./StudentsList.css";

const studentsApi: StudentsStructure = [
  {
    id: 1,
    name: "Luis",
    surname: "González",
    isHappy: true,
  },
  {
    id: 2,
    name: "Marta",
    surname: "Pi",
    isHappy: false,
  },
  {
    id: 3,
    name: "Inge",
    surname: "Heeringa",
    isHappy: true,
  },
];

const StudentsList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const students = useAppSelector((state) => state.students);

  useEffect(() => {
    dispatch(loadStudentsActionCreator(studentsApi));
  }, [dispatch]);

  return (
    <ul className="students">
      {students.map((student) => (
        <li key={student.id}>
          <StudentCard student={student} />
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
