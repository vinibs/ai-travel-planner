import './StayingInput.css';
import { useState } from 'react';
import Button from '../buttons/button/Button';


const StayingInput = ({stayingDays, confirmDaysAction}) => {
    const [days, setDays] = useState('');

    const confirmDays = (event) => {
        event.preventDefault();
        confirmDaysAction(days);
    }

    return (
        <div className="StayingInput-container">
            <p className='StayingInput-title'>
                How many days are you staying?
            </p>
            <form className='StayingInput-form' onSubmit={confirmDays}>
                <span className="StayingInput">
                    <input
                        type="number"
                        min="1"
                        max="30"
                        step="1"
                        className="StayingInput-input"
                        value={stayingDays ? stayingDays : days}
                        onChange={(e) => setDays(e.target.value)}
                        placeholder="Number of days"
                        disabled={!!stayingDays}
                    />
                    days
                </span>

                <Button
                    className="StayingInput-button"
                    disabled={days.length === 0 || !!stayingDays}
                >
                    Confirm
                </Button>
            </form>
        </div>
    )
}

export default StayingInput;