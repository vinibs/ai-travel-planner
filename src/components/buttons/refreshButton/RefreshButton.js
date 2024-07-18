import './RefreshButton.css';
import Button from '../button/Button';

const RefreshButton = ({onClick, className, children}) => {
  return (
    <Button className={`RefreshButton ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
}

export default RefreshButton;