// exercice 0

let poidsMaxiAutorise = 120;
let ageMinimumAutorise = 18;

let ageDuClient = 17;
let poidsDuClient = 60;

if (ageDuClient >= ageMinimumAutorise && poidsDuClient < poidsMaxiAutorise) {
  console.log("Vous pouvez monter.");
} else {
  console.log("Vous ne pouvez pas monter");
}
console.log("Le parc vous remercie.");

// exercice 2

let poidsMaxAutorise = 120;
let ageMinAutorise = 18;

let ageDuClientA = 17;
let poidsDuClientA = 60;

if (ageDuClientA >= ageMinAutorise && poidsDuClientA < poidsMaxAutorise) {
  console.log("Bienvenue dans le manège!");
} else if (poidsDuClientA > 120) {
  console.log(
    "Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids."
  );
} else if (ageDuClientA < 18) {
  console.log("Vous ne pouvez pas monter : ce manège est réservé aux adultes.");
} else if (poidsDuClientA < 120 && ageDuClientA < 18) {
  console.log("Vous devriez vite arrêter de manger des frites !");
}

console.log("Le parc vous remercie.");

// bogue 0

let zero = 0;

if ((zero = 0)) {
  console.log("La variable zéro vaut bien zéro.");
} else {
  zero < 0 && zero > 0;
  console.log("La variable zéro ne vaut pas zéro.");
}
console.log("Oops!!Il semble y avoir un bogue");

// bogue 2

let reponse = 1337;
let condition = false;

if ((condition = 42)) {
  console.log("La réponse est toujours " + reponse + ".");
}
console.log("Seule cette ligne devrait s'afficher.");
