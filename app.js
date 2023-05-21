//! Pierre Papier Ciseaux

// renvoi au hazard un choix parmi le tableau
const choix = ['pierre', 'papier', 'ciseaux'];

// fonction qui joue un tour et retourne le resultat dans une variable
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return (result = 'Egalité !');
  } else if (
    (playerSelection === 'pierre' && computerSelection === 'ciseaux') ||
    (playerSelection === 'ciseaux' && computerSelection === 'papier') ||
    (playerSelection === 'papier' && computerSelection === 'pierre')
  ) {
    return (result = 'Gagner !');
  } else {
    return (result = 'Perdu !');
  }
}

function game() {
  // Collecte les resultats dans des variable à chaque tours de jeu
  let playerScore = 0;
  let computerScore = 0;

  // tout est contenu dans une boucle de 5 tours
  for (let i = 0; i < 5; i++) {
    // crée un choix ordinateur
    function getComputerChoice() {
      return choix[Math.floor(Math.random() * 3)];
    }
    const computerSelection = getComputerChoice();

    // appel de l'entrée utilisateur verifié

    let entreeUtilisateur = prompt(
      'Veuillez entre soit pierre,papier ou ciseaux'
    );

    playerSelection = entreeUtilisateur.toLowerCase();

    // fonction qui prend les deux choix et retourne le resultat dans les variable crées prècèdement
    playRound(playerSelection, computerSelection);
    if (result === 'Egalité !') {
      console.log(
        `Vous avez choisis ${playerSelection} et l'adversaire, ${computerSelection}`
      );
      console.log(result);
      playerScore++;
      computerScore++;
    } else if (result === 'Gagner !') {
      console.log(
        `Vous avez choisis ${playerSelection} et l'adversaire, ${computerSelection}`
      );
      console.log(result);
      playerScore++;
    } else {
      console.log(
        `Vous avez choisis ${playerSelection} et l'adversaire, ${computerSelection}`
      );
      console.log(result);
    }
  }

  // retourne le resultat final
  if (playerScore > computerScore) {
    console.log(`Bravo vous avez gagné ${playerScore} manches !`);
  } else if (playerScore < computerScore) {
    console.log(`L'adversaire à gagné ${computerScore} manches !`);
  } else {
    console.log('Vous avez égalité');
  }
}

game();
