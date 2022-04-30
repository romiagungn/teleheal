import './style.css';
import icon from '../../icon.png';
import { useHistory } from 'react-router-dom';

export default function AppBar() {
    const history = useHistory();

    const SignOut = () => {
        history.push('/');
    };

    const Icon = (
        <div className='icon' onClick={SignOut} style={{cursor: "pointer"}}>
            <img src={icon} alt='icon' width='100%' height='100%' />
        </div>
    );

    return (
        <div className='app-bar'>
            <div className='brand-wrapper'>
                <div className='brand' onClick={SignOut}>
                    {Icon}
                    <h4>Teleheal</h4>
                </div>
                {Icon}
            </div>
        

            <div className='label-wrapper'>
                <div className='label'>Label</div>
                <div className='label' onClick={SignOut} style={{cursor: "pointer"}}>SignOut</div>
            </div>
        </div>
    );
}
