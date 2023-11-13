//On importe des hooks de React pour gérer les états
import { useState, useRef, useEffect } from "react";
import arrowUp from "../../assets/images/arrow_up.svg";

//Le composant Collapse permet de gérer les collapses/toggles du site
//Elle prend props comme argument, qui contient les propriétés passées au composant Collapse
export default function Collapse(props) {

	//On définit le state initial du collapse, qui est false par défaut
	const [toggle, setToggle] = useState(false);

	//On définit également le state de la hauteur du contenu du collapse
	const [elementHeight, setElementHeight] = useState();

	//La fonction toggleState sert à inverser la valeur actuelle du collapse, pour basculer entre les différents states (ouvert/fermé)
	function toggleState() {
		setToggle(!toggle);
	};

	//On créé une variable qui stockera la hauteur du contenu du collapse lorsqu'il est ouvert
	const referenceHeight = useRef();

	//Le hook useEffect va s'appliquer lors du montage du component, il récupère la hauteur du collapse lorsqu'il va s'ouvrir, et le stock dans une variable elementHeight
	useEffect(() => {
		//scrollHeight permet de récupérer la hauteur totale de l'élément, ici le texte qui sera caché, à partir de referenceheight.current, pour mettre à jour elementHeight
		setElementHeight(`${referenceHeight.current.scrollHeight}px`);
	}, []);

	return (
		//Le div principal possède une classe CSS collapse, et une autre classe dynamique définie par la valeur de props.aboutStyle
		//On fait cela car comme le composant Collapse est réutilisé dans la page Logement, on souhaite garder les styles séparés
		<div className={`collapse ${props.aboutStyle}`}>

			{/*Ce div active le state qui changera le statut du collapse, avec le titre, et la flèche d'ouverture/fermeture*/}
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "toggle-arrow toggle-rotation" : "toggle-arrow"}
					src={arrowUp}
					alt="Flèche toggle collapse"
				/>
			</div>

			{/*Ce div contient le texte du collapse, dont la taille est définie lors de l'ouverture. Ainsi, chaque collapse peut prendre la hauteur de son contenu */}
			<div
				ref={referenceHeight}
				className={toggle ? "collapse__toggle toggle-animation" : "collapse__toggle"}
				style={{ height: toggle ? `${elementHeight}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}