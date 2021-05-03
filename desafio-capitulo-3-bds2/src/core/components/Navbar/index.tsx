import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <div className="title-bar">
            <Link to="/" className="link-home">Bootcamp DevSuperior</Link>
        </div>
    </nav>
);

export default Navbar;