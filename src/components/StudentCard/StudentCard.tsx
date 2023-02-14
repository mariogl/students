import { StudentStructure } from "../../types";
import Button from "../Button/Button";
import RemoveButton from "../RemoveButton/RemoveButton";
import ToggleMoodButton from "../ToggleMoodButton/ToggleMoodButton";
import "./StudentCard.css";

interface StudentCardProps {
  student: StudentStructure;
}

const StudentCard = ({
  student: { id, name, surname, isHappy },
}: StudentCardProps): JSX.Element => {
  return (
    <article className="student">
      <h2 className="student__name">
        {name} {surname}
      </h2>
      <div className="student__actions">
        <ToggleMoodButton isHappy={isHappy} id={id} />
        <RemoveButton id={id} />
      </div>
    </article>
  );
};

export default StudentCard;
