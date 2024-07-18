import './Button.css';

const Button = ({onClick, className, children}) => {
  return (
    <button className={`Button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;