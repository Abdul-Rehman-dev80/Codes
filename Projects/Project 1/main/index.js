import { projectCards } from "../data/projectsData.js";
import { aboutCards } from "../data/AboutData.js";

let projectsCardsContainer = document.querySelector(".projectCardsContainer");
let aboutCardsContainer = document.querySelector(".aboutCardsContainer");
let burgerIcon = document.querySelector(".burgerMenu");
let linksContainer = document.querySelector(".forLinks");

class ProjCardGen {
  constructor(imgSrc, title) {
    this.imgSrc = imgSrc;
    this.title = title;
  }

  pushCard(htmlContainer) {
    let cardHtml = `<div class="projectCard">
                 <p>${this.title}</p>
                 <img src="${this.imgSrc}" alt="">
                </div>`;
    htmlContainer.innerHTML += cardHtml;
  }
}

class AboutCardGen extends ProjCardGen {
  constructor(imgSrc, title, secondTitle, description) {
    super(imgSrc, title);
    this.secondTitle = secondTitle;
    this.description = description;
  }

  pushCard(htmlContainer) {
    let cardHtml = `
        <div class="aboutCard">
            <img src="${this.imgSrc}"alt="">
            <p class="cardTitle largeFont">${this.title}</p>
            <p class="cardTitle2 mediumFont">${this.secondTitle}</p>
            <p>${this.description}</p>
            <button class="mediumFont contactBtn">Contact</button>
        </div>`;
    htmlContainer.innerHTML += cardHtml;
  }
}

let projectCardsClass = projectCards.map((value) => {
  return new ProjCardGen(value.imgSrc, value.title);
});

let aboutCardsClass = aboutCards.map((value) => {
  return new AboutCardGen(
    value.imgSrc,
    value.title,
    value.secondTitle,
    value.description
  );
});

let cardGenerator = function (cardsClass, cardsContainer) {
  cardsClass.forEach((e) => {
    e.pushCard(cardsContainer);
  });
};

cardGenerator(projectCardsClass, projectsCardsContainer);
cardGenerator(aboutCardsClass, aboutCardsContainer);

burgerIcon.addEventListener("click", () => {
  linksContainer.classList.toggle("showLinksBar");
});
