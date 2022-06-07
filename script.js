let player1 = prompt("Quel est le prénom du joueur n°1 ?");
let player2 = prompt("Quel est le prénom du joueur n° 2 ?");
let nbTurns = 1;
let scorePlayerOneArea = document.querySelector("#scorePlayerOne");
let scorePlayerTwoArea = document.querySelector("#scorePlayerTwo");
let symbolePlayerOne = prompt("Quel symbole pour " + player1 + "?");
let symbolePlayerTwo = prompt("Quel symbole pour " + player2 + "?");
let symbolePlayerOneArea = document.querySelector("#sign1");
let symbolePlayerTwoArea = document.querySelector("#sign2");
let whosturnarea = document.querySelector("#whosTurn");
let tiles = document.querySelectorAll('th');
let tileUn = document.querySelector("#tileUn");
let tileDeux = document.querySelector("#tileDeux");
let tileTrois = document.querySelector("#tileTrois");
let tileQuatres = document.querySelector("#tileQuatre");
let tileCinq = document.querySelector("#tileCinq");
let tileSix = document.querySelector("#tileSix");
let tileSept = document.querySelector("#tileSept");
let tileHuit = document.querySelector("#tileHuit");
let tileNeuf = document.querySelector("#tileNeuf");
let historique = document.querySelector('.historique');


function checkIfTilesIsFull(){
    if (tileUn.innerHTML != "" && tileDeux.innerHTML != "" && tileTrois.innerHTML != "" &&
    tileQuatres.innerHTML != "" && tileCinq.innerHTML != "" && tileSix.innerHTML != "" &&
    tileSept.innerHTML != "" && tileHuit.innerHTML != "" && tileNeuf.innerHTML != "")
    {
        alert("Plus aucun mouvement possible. Match nul.");
        location.reload();
    }
}


setInterval(checkIfTilesIsFull, 1000);



function checkIfPlayerOneWins() {
    if (tileUn.innerHTML == symbolePlayerOne && tileDeux.innerHTML == symbolePlayerOne && tileTrois.innerHTML == symbolePlayerOne
        ||
        tileQuatres.innerHTML == symbolePlayerOne && tileCinq.innerHTML == symbolePlayerOne && tileSix.innerHTML == symbolePlayerOne
        ||
        tileSept.innerHTML == symbolePlayerOne && tileHuit.innerHTML == symbolePlayerOne && tileNeuf.innerHTML == symbolePlayerOne
        ||
        tileUn.innerHTML == symbolePlayerOne && tileQuatres.innerHTML == symbolePlayerOne && tileSept.innerHTML == symbolePlayerOne
        ||
        tileDeux.innerHTML == symbolePlayerOne && tileCinq.innerHTML == symbolePlayerOne && tileHuit.innerHTML == symbolePlayerOne        
        ||
        tileTrois.innerHTML == symbolePlayerOne && tileSix.innerHTML == symbolePlayerOne && tileNeuf.innerHTML == symbolePlayerOne
        ||
        tileUn.innerHTML == symbolePlayerOne && tileCinq.innerHTML == symbolePlayerOne && tileNeuf.innerHTML == symbolePlayerOne
        ||
        tileTrois.innerHTML == symbolePlayerOne && tileCinq.innerHTML == symbolePlayerOne && tileSept.innerHTML == symbolePlayerOne)
    {
        alert(player1 + " a gagné.");
        location.reload();
    }
}

function checkIfPlayerTwoWins() {
    if (tileUn.innerHTML == symbolePlayerTwo && tileDeux.innerHTML == symbolePlayerTwo && tileTrois.innerHTML == symbolePlayerTwo
        ||
        tileQuatres.innerHTML == symbolePlayerTwo && tileCinq.innerHTML == symbolePlayerTwo && tileSix.innerHTML == symbolePlayerTwo
        ||
        tileSept.innerHTML == symbolePlayerTwo && tileHuit.innerHTML == symbolePlayerTwo && tileNeuf.innerHTML == symbolePlayerTwo
        ||
        tileUn.innerHTML == symbolePlayerTwo && tileQuatres.innerHTML == symbolePlayerTwo && tileSept.innerHTML == symbolePlayerTwo
        ||
        tileDeux.innerHTML == symbolePlayerTwo && tileCinq.innerHTML == symbolePlayerTwo && tileHuit.innerHTML == symbolePlayerOne        
        ||
        tileTrois.innerHTML == symbolePlayerTwo && tileSix.innerHTML == symbolePlayerTwo && tileNeuf.innerHTML == symbolePlayerTwo
        ||
        tileUn.innerHTML == symbolePlayerTwo && tileCinq.innerHTML == symbolePlayerTwo && tileNeuf.innerHTML == symbolePlayerTwo
        ||
        tileTrois.innerHTML == symbolePlayerTwo && tileCinq.innerHTML == symbolePlayerTwo && tileSept.innerHTML == symbolePlayerTwo)
    {
        alert(player2 + " a gagné.");
        location.reload();
    }
}





scorePlayerOneArea.innerHTML = player1;
scorePlayerTwoArea.innerHTML = player2;

symbolePlayerOneArea.innerHTML = symbolePlayerOne;
symbolePlayerTwoArea.innerHTML = symbolePlayerTwo;

for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', function(e){
        if (nbTurns % 2 === 0 && nbTurns != 0) {
            if (e.target.innerHTML == symbolePlayerOne)
            {
                alert("Cette case est déja prise.")
            }
            else if (e.target.innerHTML == symbolePlayerTwo)
            {
                alert("Cette case est déja prise.")
            }
            else
            {
                e.target.innerHTML = symbolePlayerTwo;
                e.target.style.backgroundColor = "#2ecc71";
                e.target.style.color = "#27ae60";
                whosturnarea.innerHTML = "C'est au tour de " + player1;
                checkIfPlayerTwoWins();
                let li = document.createElement('li');
                li.innerHTML = `${player2} a posé sa pièce sur la case ${e.target.id.replace('tile', '')}`; 
                historique.appendChild(li)
                
            }

        }
        else if (nbTurns % 2 === 1) {
            
            if (e.target.innerHTML == symbolePlayerOne)
            {
                alert("Cette case est déja prise.")
            }
            else if (e.target.innerHTML == symbolePlayerTwo)
            {
                alert("Cette case est déja prise.")
            }
            else
            {
                e.target.innerHTML = symbolePlayerOne;
                e.target.style.backgroundColor = "#e74c3c";
                e.target.style.color = "#c0392b";
                whosturnarea.innerHTML = "C'est au tour de " + player2;
                checkIfPlayerOneWins()
                let li = document.createElement('li');
                li.innerHTML = `${player1} a posé sa pièce sur la case ${e.target.id.replace('tile', '')}`; 
                historique.appendChild(li)
                
            }
        }
        nbTurns++;
        
    })
}

