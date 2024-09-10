import { CSSProperties } from "react";
import "./MyButton.css";

interface MyButtonProps {
  className?: string;
  buttonText: string;
  style?: CSSProperties;
  onClick?: () => void;
  type: "button" | "submit";
}

const MyButton = ({
  buttonText,
  className,
  onClick,
  type,
  style,
}: MyButtonProps) => {
  return (
    <button className={className} onClick={onClick} type={type} style={style}>
      {buttonText}
    </button>
  );
};

export default MyButton;
