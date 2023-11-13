import { Link } from "react-router-dom";

import logements from "../../datas/logements.json";

import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";

import bannerHome from "../../assets/images/banner-home.png";

//La fonction Home va parcourir le tableau des logements, et les afficher grâce au composant Card, en y incluant un Link vers le logement
//Le composant Banner est également utilisé
export default function Home() {
  return (
    <div className="home">
      <main>
        <Banner text="Chez vous, partout et ailleurs" image={bannerHome} />
        <div className="card-container">
          {logements.map((logement) => {
            return (
              <article key={logement.id}>
                <Link to={`/logement/${logement.id}`}>
                  <Card image={logement.cover} title={logement.title} />
                </Link>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
};