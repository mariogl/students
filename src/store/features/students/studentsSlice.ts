import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StudentsStructure } from "../../../types";

const initialStudents: StudentsStructure = [];

const studentsSlice = createSlice({
  name: "students",
  initialState: initialStudents,
  reducers: {
    loadStudents: (
      currentStudents,
      action: PayloadAction<StudentsStructure>
    ) => [...action.payload],
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
  loadStudents: loadStudentsActionCreator,
  removeStudent: removeStudentActionCreator,
  toggleStudentHappiness: toggleStudentHappinessActionCreator,
} = studentsSlice.actions;
