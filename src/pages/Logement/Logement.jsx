import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import logements from "../../datas/logements.json";

import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";


export default function HousingDetails() {
    //On récupère les paramètres de l'url et la fonction de navigation
    const { id } = useParams();
    const navigate = useNavigate();

    //On déclare l'état local selectedHousing, et la fonction pour le mettre à jour
    const [selectedHousing, setSelectedHousing] = useState(null);

    //On utilise useEffect, pour effectuer des actions asynchrones une fois que les informations de la pge sont chargées
    useEffect(() => {
        //Avec fetchData, on récupère les données du logement correspondant à l'ID (récupérée dans l'URL)
        async function fetchData() {
			try {
				//La méthode find() permet de chercher le logement correspondant
				const selected = logements.find((logement) => logement.id === id);
				//S'il n'est pas trouvé, une erreur est renvoyée
				if (!selected) {
					throw new Error("Logement non trouvé !");
				}
				//On met ensuite à jour l'état de selectedHousing
				setSelectedHousing(selected);
			} catch (error) {
				//Si une erreur est trouvée, on est redirigé vers la page 404
				console.error("Error fetching data:", error);
				navigate("/404", { state: { message: "Error fetching data" } });
			}
        };

        fetchData();
    //Le tableau de dépendance indique quand useEffect doit être utilisé
    }, [id, navigate]);

    if (!selectedHousing) {
        return null;
    }

    //On extrait toutes les propriétés du logement sélectionné
    const { pictures, title, location, tags, host, rating, description, equipments } = selectedHousing;

    //Pour le composant slideshow, on créé un tableau
    const slideshowPictures = pictures;

    //Pour le tableau d'équipements, on le change en liste pour pouvoir l'afficher correctement
    const equipmentList = equipments.map((item, index) => <li key={index} className="equipment-list">{item}</li>);

    return (
        <div key={id} className="housing-container">
            <Slideshow slides={slideshowPictures} />
            <section className="housing-detail-container">
                <div className="housing-title-container">
                    <div className="title-container">
                        <h1>{title}</h1>
                        <h3>{location}</h3>
                    </div>
                    <div className="tags-container">
                        {tags.map((tag) => 
                            <Tag 
                                key={tag} 
                                tag={tag} 
                            />)}
                    </div>
                </div>
                <div className="host-rating-container">
                    <div>
                        <Host 
                            hostName={host.name} 
                            hostPicture={host.picture} />
                    </div>
                    <div className="rating-container">
                        <Rating score={rating} />
                    </div>
                </div>
            </section>
            <div className="collapse-container collapse-container__housing">
                <Collapse aboutTitle="Description" aboutText={description} />
                <Collapse aboutTitle="Équipements" aboutText={equipmentList} />
            </div>
        </div>
    );
}