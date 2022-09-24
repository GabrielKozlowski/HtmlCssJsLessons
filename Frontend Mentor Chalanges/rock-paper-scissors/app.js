// state 
//   score
//   player pic
//   ai pick


let state = {
    playerWins: 100,
    AiWins: 0,
};


const renderScore = () => {
    const pointsElement = document.querySelector(".points");
    pointsElement.innerText = state.playerWins - state.AiWins;
};



const init = () => {
    renderScore();
};


