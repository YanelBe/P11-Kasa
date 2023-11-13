import { useState } from "react";
import left from "../../assets/images/arrow_back.svg";
import right from "../../assets/images/arrow_forward.svg";

export default function Slideshow({ slides }) {

	//On utilise le hook useState pour mettre à jour l'état des slides, par défaut à 0
	const [current, setCurrent] = useState(0); //je définis l'index du premier slide à 0

	//
	const length = slides ? slides.length : 0; // longueur du tableau de slides

	//Fonction pour passer à la slide suivante
	//L'opérateur ternaire permet de repasser à la première image lorsqu'on clique sur la flèche avant sur la dernière image
	function nextSlide() {
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	};

	//Fonction pour passer à la slide précédente
	//L'opérateur ternaire permet de repasser à la dernière image lorsqu'on clique sur la flèche arrière sur la première image
	function previousSlide() {
		setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
	};


	return (
		<section id="slideshow-container">
			<div class="arrow-container">
				{/*Les flèches sont affichées uniquement si la longueur des slides est supérieure à 1*/}
				{length > 1 && (
					<img
						src={left}
						alt="Flèche gauche"
						onClick={previousSlide}
					/>
				)}
				{length > 1 && (
					<img
						src={right}
						alt="Flèche droite"
						onClick={nextSlide}
					/>
				)}
			</div>

			{slides &&
				slides.map((slide, index) => (
					<div
						key={index}
						//On rajoute un ternaire pour afficher la classe CSS servant à l'animation du slider
						className={ current === index ? "slideshow slide-transition" : "slideshow"}>
						{index === current && <img src={slide} alt="Bien en location" />}
						{index === current && (
							<span className="slideshow__number">
								{current + 1}/{length}
							</span>
						)}
					</div>
				))}
		</section>
	);
}
