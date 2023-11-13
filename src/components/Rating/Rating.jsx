import emptyStar from "../../assets/images/star-inactive.svg";
import fullStar from "../../assets/images/star-active.svg";

//Le composant Rating attribue les étoiles correspondantes à la note associée au Host dans le tableau
export default function Rating({ score }) {
	//On créé un tableau qui contient des chiffres de 1 à 5, pour attribuer une étoile pleine ou vide
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rating-component">
			{/*Un ternaire est utilisé pour savoir quelle icône d'étoile utiliser selon le score
			Si le score est supérieur ou égal au niveau actuel, l'étoile est pleine, sinon, elle est vide*/}
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={fullStar}
						alt="Full rating star"
					/>
				) : (
					<img
						key={level.toString()}
						className="star"
						src={emptyStar}
						alt="Empty rating star"
					/>
				)
			)}
		</div>
	);
}
