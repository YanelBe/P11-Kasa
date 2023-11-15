import { NavLink } from "react-router-dom";

//Le composant Nav sert à rediriger vers les liens correspondants du site
export default function Nav() {
		
	return (
		<nav className="nav-header">
			<NavLink to="/" className="nav-header__link-home">
				Accueil
			</NavLink>
			<NavLink to="/about" className="nav-header__link-about">
				A Propos
			</NavLink>
		</nav>
	);
}
