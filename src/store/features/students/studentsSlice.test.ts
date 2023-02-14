import { StudentsStructure, StudentStructure } from "../../../types";
import { removeStudentActionCreator, studentsReducer } from "./studentsSlice";

describe("Given a studentsReducer function", () => {
  describe("When it receives a list with two students named Victor and Marcel and a remove Victor action", () => {
    test("Then it should return a list with just Marcel", () => {
      const victor: StudentStructure = {
        id: 1,
        name: "Victor",
        surname: "Granda",
        isHappy: true,
      };
      const marcel: StudentStructure = {
        id: 2,
        name: "Marcel",
        surname: "Martino",
        isHappy: true,
      };
      const students: StudentsStructure = [victor, marcel];

      const removeVictorAction = removeStudentActionCreator(victor.id);
      const expectedNewStudents: StudentsStructure = [marcel];

      const newStudents = studentsReducer(students, removeVictorAction);

      expect(newStudents).toStrictEqual(expectedNewStudents);
    });
  });
});
