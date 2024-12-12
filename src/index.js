import './pages/index.css';

const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

function createCard(card, removeCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__title").textContent = card.name;

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", removeCard);

  return cardElement;
}

const removeCard = (evt) => {
  const card = evt.target.parentElement;
  card.remove();
};

initialCards.forEach((card) => placesList.append(createCard(card, removeCard)));
