import './ResetButton.css';
import Button from '../button/Button';

const ResetButton = ({onClick, className, children}) => {
  return (
    <Button className={`ResetButton ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
}

export default ResetButton;