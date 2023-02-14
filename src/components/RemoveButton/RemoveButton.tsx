import { removeStudentActionCreator } from "../../store/features/students/studentsSlice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";

interface RemoveButtonProps {
  id: number;
}

const RemoveButton = ({ id }: RemoveButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const removeStudent = () => {
    dispatch(removeStudentActionCreator(id));
  };

  return <Button icon="🗑️" type="remove" actionOnClick={removeStudent} />;
};

export default RemoveButton;
