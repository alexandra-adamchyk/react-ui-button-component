import "./Button.css";

export const Button = ({ size, variant, round, buttonTitle }) => {
  return (
    <button className={`${size} ${variant} ${round ? "round" : ""}`}>
      {buttonTitle}
    </button>
  );
};
