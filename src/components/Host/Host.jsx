//Le composant Host récupère les informations du propriétaire de l'appartement à louer
export default function Host(props) {
	return (
		<aside className="host-container">
			<div className="host-name">{props.hostName}</div>
			<div className="host-profile-picture">
				<img src={props.hostPicture} alt={props.id} />
			</div>
		</aside>
	);
}
