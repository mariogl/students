import "./Button.css";

const Button = (): JSX.Element => {
  return (
    <button className="student__action student__action--toggle-mood">
      😊
      {/* 😔 */}
    </button>
  );
};

export default Button;
