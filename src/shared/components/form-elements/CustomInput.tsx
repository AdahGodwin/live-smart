import { type InputHTMLAttributes } from 'react';
import './CustomInput.scss';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className={`custom-input-container ${className}`}>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
};

export default CustomInput;
