//On créé un component Banner qui servira pour la bannière de la page d'accueil, et de la page A Propos
//On rajoute comme argument "image" et "text" pour pouvoir facilement changer le texte et l'image lors de la réutilisation du component
export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <span className="banner__text">{text}</span>
    </div>
  );
}
