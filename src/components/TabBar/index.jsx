import './style.css';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const menus = [
    { name: 'Home', url: '/home' },
    { name: 'RS', url: '/rs' },
    { name: 'Klinik', url: '/klinik' },
    { name: 'Profile', url: '/profile' },
];

export default function TabBar() {
    const history = useHistory();
    return (
        <div className='tab-bar'>
            {menus.map((menu) => (
                <div className='tab-bar-item'>
                    <div className='icon' />
                    <div>
                        <Link href={menu.url} onClick={() => history.push(menu.url)}>
                            {menu.name}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
