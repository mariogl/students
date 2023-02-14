import { toggleStudentHappinessActionCreator } from "../../store/features/students/studentsSlice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";

interface ToggleMoodButtonProps {
  id: number;
  isHappy: boolean;
}

const ToggleMoodButton = ({
  id,
  isHappy,
}: ToggleMoodButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const toggleStudentHappiness = () => {
    dispatch(toggleStudentHappinessActionCreator(id));
  };

  return (
    <Button
      icon={isHappy ? "😊" : "😔"}
      type="toggle-mood"
      actionOnClick={toggleStudentHappiness}
    />
  );
};

export default ToggleMoodButton;
