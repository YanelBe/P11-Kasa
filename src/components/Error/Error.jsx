import { Link } from "react-router-dom";

//Le composant ErrorPage renvoie le contenu de la page d'erreur, ainsi qu'un lien vers l'accueil
export default function ErrorPage() {
	return (
		<div className="error-container">
			<p className="error-number">404</p>
			<p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error-redirect">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}
