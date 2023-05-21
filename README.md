# Pierre Papier Ciseaux

1. Le jeu va jouer contre l'ordinateur, alors commencer par une fonction appelée `getComputerChoice` qui renverra au hasard soit `'pierre'`, '`papier'` ou `'ciseaux'`. Nous utiliserons cette fonction dans le jeu pour retourner le choix de l'ordinateur

2. Écrire une fonction qui joue une manche de `Pierre Papier Ciseaux`. La fonction doit prendre deux paramètres - `playerSelection` et `computerSelection` - puis renvoyer une chaîne qui déclare le vainqueur du tour comme suit : `"Vous avez gagné"`

- Rendre le paramètre `playerSelection` de la fonction insensible à la casse (afin que les utilisateurs puissent saisir pierre, PIERRE, PierrE ou toute autre variante)

3. **Remarque importante :** On souhaite `retourner` les résultats de cet appel de fonction. On utilisera plus tard ce que l'on renvoie, alors testons cette fonction en utilisant console.log pour voir les résultats :

```js
function playRound(playerSelection, computerSelection) {
  // le code
}

const playerSelection = 'pierre';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
```

4. Écrire une NOUVELLE fonction appelée `game()`. Appeler la fonction `playRound` à l'intérieur de celle-ci pour jouer à un jeu de `5 tours` qui enregistre le score et rapporte un gagnant ou un perdant à la fin

- Utiliser `prompt()` pour obtenir l'entrée de l'utilisateur

## Rendu

Lien vers le repo GitHub
