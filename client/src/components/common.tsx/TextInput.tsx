import { ChangeEvent } from "react";
import "./TextInput.css";

interface TextInputProps {
  labelHeader?: string;
  labelText: string;
  id: string;
  name: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  labelHeader,
  labelText,
  id,
  name,
  placeholder,
  onChange,
}: TextInputProps) => {
  return (
    <div className="text-input">
      <label htmlFor={id} className="todo-header">
        <div>
          <h2 style={!labelHeader ? { display: "none" } : {}}>{labelHeader}</h2>
          <p>{labelText}</p>
        </div>
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {/* <span>2/160</span> */}
    </div>
  );
};

export default TextInput;
