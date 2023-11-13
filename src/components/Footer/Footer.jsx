import logo from "../../assets/images/logo-footer.svg";

//Le composant Footer inclut des informations et un logo
export default function Footer() {
	return (
		<footer className="footer-container">
			<img src={logo} alt="Kasa Logo" />
			<p className="footer-container__text">© 2023 Kasa. All rights reserved</p>
		</footer>
	);
}
