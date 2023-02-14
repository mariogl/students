import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StudentsStructure } from "../../../types";

const initialStudents: StudentsStructure = [
  {
    id: 1,
    name: "Luis",
    surname: "González",
    isHappy: true,
  },
  {
    id: 2,
    name: "Marta",
    surname: "Serrallonga",
    isHappy: false,
  },
];

const studentsSlice = createSlice({
  name: "students",
  initialState: initialStudents,
  reducers: {
    removeStudent: (currentStudents, action: PayloadAction<number>) =>
      currentStudents.filter((student) => student.id !== action.payload),
    toggleStudentHappiness: (currentStudents, action: PayloadAction<number>) =>
      currentStudents.map((student) => ({
        ...student,
        isHappy:
          student.id === action.payload ? !student.isHappy : student.isHappy,
      })),
  },
});

export const studentsReducer = studentsSlice.reducer;
export const {
  removeStudent: removeStudentActionCreator,
  toggleStudentHappiness: toggleStudentHappinessActionCreator,
} = studentsSlice.actions;
