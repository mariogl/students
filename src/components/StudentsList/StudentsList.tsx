import StudentCard from "../StudentCard/StudentCard";
import "./StudentsList.css";

const StudentsList = (): JSX.Element => {
  return (
    <ul className="students">
      <li>
        <StudentCard />
      </li>
      <li>
        <StudentCard />
      </li>
      <li>
        <StudentCard />
      </li>
    </ul>
  );
};

export default StudentsList;
