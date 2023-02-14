import Button from "../Button/Button";
import RemoveButton from "../RemoveButton/RemoveButton";
import ToggleMoodButton from "../ToggleMoodButton/ToggleMoodButton";
import "./StudentCard.css";

const StudentCard = (): JSX.Element => {
  return (
    <article className="student">
      <h2 className="student__name">Luis González</h2>
      <div className="student__actions">
        <ToggleMoodButton isHappy={true} id={1} />
        <RemoveButton id={2} />
      </div>
    </article>
  );
};

export default StudentCard;
