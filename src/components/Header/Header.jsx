import logo from "../../assets/images/logo.svg";
import Nav from "../Nav/Nav";

//Le composant Header inclut le logo et le composant Nav
export default function Header() {
	return (
		<header className="header-container">
			<figure className="header-container__logo">
				<img className="logo" src={logo} alt="Kasa Logo" />
			</figure>
			<Nav className="nav-header" />
		</header>
	);
}
