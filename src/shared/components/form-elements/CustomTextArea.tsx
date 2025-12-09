import { type TextareaHTMLAttributes } from 'react';
import './CustomTextArea.scss';

interface CustomTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ label, className = '', ...props }) => {
  return (
    <div className={`custom-textarea-container ${className}`}>
      {label && <label>{label}</label>}
      <textarea {...props} />
    </div>
  );
};

export default CustomTextArea;
