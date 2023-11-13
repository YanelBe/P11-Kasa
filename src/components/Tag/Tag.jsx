//Le composant Tag récupère le props.tag pour l'afficher
export default function Tag(props) {
	return (
		<div className="tag-wrap">
			<span className="tag-button">{props.tag}</span>
		</div>
	);
}
