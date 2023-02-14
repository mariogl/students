import "./Button.css";

interface ButtonProps {
  icon: string;
  type: string;
  actionOnClick: () => void;
}

const Button = ({ icon, type, actionOnClick }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`student__action student__action--${type}`}
      onClick={actionOnClick}
    >
      {icon}
    </button>
  );
};

export default Button;
