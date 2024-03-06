import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav style={{ backgroundColor: '#f4f4f4', padding: '1rem', width: '200px' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/client">Client</Link></li>
                <li><Link to="/company">Company</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
