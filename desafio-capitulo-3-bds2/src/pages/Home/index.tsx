import { Link } from "react-router-dom";
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <h1 className="home-title">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
        <div className="home-description">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
            <p>Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
            <p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="#">antforfigma@gmail.com</a></p>
        </div>
        <Link to="/search">
            <button className="btn-search">Começar</button>
        </Link>
    </div>
);

export default Home;