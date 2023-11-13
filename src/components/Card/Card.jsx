//On passe les arguments image et title pour pouvoir facilement définir le titre et l'image d'une card (annonce sur la page Home)
//On rajoute bien une classe CSS pour le linear gradient présent dans chaque case d'annonce
export default function Card({ image, title }) {
	return (
		<article className="card-housing">
			<img src={image} alt="Bien à louer" />
			<div className="card-housing__gradient">
				<p className="card-housing__title">{title}</p>
			</div>
		</article>
	);
}
