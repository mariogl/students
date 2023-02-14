import { useAppSelector } from "../../store/hooks";
import "./Counter.css";

const Counter = (): JSX.Element => {
  const totalStudents = useAppSelector((state) => state.students).length;

  return <span className="students-info">Total: {totalStudents} students</span>;
};

export default Counter;
