// state 
//   score
//   player pic
//   ai pick

const playerWinsLSKey = "playerWins";
const AiWinsLSKey = "AiWins";

let state = {
    playerWins: localStorage.getItem(playerWinsLSKey) || 0,
    AiWins: localStorage.getItem(AiWinsLSKey) || 0,
    playerPick: null,
    AiPick: null,
};

const renderScore = () => {
    const pointsElement = document.querySelector(".points");
    pointsElement.innerText = state.playerWins - state.AiWins;
};

const bindPickEvents = () => {
    document.querySelectorAll(".options button").forEach((button) => {
        button.addEventListener("click", pick);
    });
};

const pick = (e) => {
    pickByPlayer(e.currentTarget.dataset.pick);
    pickByAi();
    hideOptions();
    showFight();
};

const pickByPlayer = (pickedOption) => {
    state = {
        ...state,
        playerPick: pickedOption,
    };
};


const pickByAi = () => {
    const options = ["rock", "paper", "scissors"];
    const AiPick = options[Math.floor(Math.random() * options.length)];

    state = {
        ...state,
        AiPick,
    };
};

const hideOptions = () => {
    document.querySelector(".options").classList.add("hidden");
};

const showFight = () => {
    document.querySelector(".fight").classList.remove("hidden");
    createElementPickedByPlayer();
    // createElementPickedByAi();
};

const createElementPickedByPlayer = () => {
    const playerPick = state.playerPick;

    const buttonElement = document.createElement("div");
    buttonElement.classList.add('button', 'button--${playerPick}');

    const imageContainerELement = document.createElement("div");
    imageContainerELement.classList.add("button__image-container");

    const imgElement = document.createElement("img");
    imgElement.src = './images/icon-${playerPick}.svg';
    imgElement.alt = playerPick; 

    imageContainerELement.appendChild(imgElement);

    buttonElement.appendChild(imageContainerELement);

    const pickContainerElement = document.querySelector(".pick__container--player");
    pickContainerElement.innerHTML = "";
    pickContainerElement.appendChild(buttonElement);
};


const init = () => {
    renderScore();
    bindPickEvents();
};


init();