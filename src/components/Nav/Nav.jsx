import { Link } from "react-router-dom";

//Le composant Nav sert à rediriger vers les liens correspondants du site
export default function Nav() {
	return (
		<nav className="nav-header">
			<Link to="/" className="nav-header__link-home">
				Accueil
			</Link>
			<Link to="/about" className="nav-header__link-about">
				A Propos
			</Link>
		</nav>
	);
}
