import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import bannerAbout from "../../assets/images/banner-about.png";

//On créé un tableau dataAbout qui contient le texte qui sera présent dans le collapse de la page A Propos
const dataAbout = [
	{
		title: 'Fiabilité',
		content:
			'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
	},
	{
		title: 'Respect',
		content:
			'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
	},
	{
		title: 'Service',
		content:
			"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
	},
	{
		title: 'Sécurité',
		content:
			"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	},
]


//La fonction de la page A Propos retourne : une bannière, ainsi que 4 collapses, correspondant au tableau précédent
//On utilise la méthode map() pour parcourir le tableau et retourner ses valeurs
export default function About() {
	return (
		<>
			<Banner image={bannerAbout} text="" />
			<div className="collapse-container">
				{dataAbout.map((rule, id) => (
					<Collapse
						key={id}
						aboutTitle={rule.title}
						aboutText={rule.content}
						aboutStyle="toggle-about-style"
					/>
				))}
			</div>
		</>
	);
}
