import Button from "../Button/Button";
import "./StudentCard.css";

const StudentCard = (): JSX.Element => {
  return (
    <article className="student">
      <h2 className="student__name">Luis González</h2>
      <div className="student__actions">
        <Button />
        <Button />
        {/* <button className="student__action student__action--remove">🗑️</button> */}
      </div>
    </article>
  );
};

export default StudentCard;
