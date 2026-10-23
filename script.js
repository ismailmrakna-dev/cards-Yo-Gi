// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.

const creerCards=()=>{
    const containerCard=document.querySelector("#cardsMonster")
    const monsters=creatures.slice()
    monsters.forEach((monst)=>{
        let stars=""
        for(let i=0;i<monst.stats.level; i++){
            stars += "⭐"
        }
        const card=document.createElement("article")
        card.className=`h-150 flex flex-col gap-3 bg-[url('../images/bg-card.jpg')] bg-cover bg-center rounded-md p-3 pb-4 
        hover:scale-105 hover:shadow-lg hover:shadow-[#F5B942]/50 transition-all duration-300"`
        card.innerHTML=`
          <div class="relative flex h-2/3 items-center text-white justify-center rounded-xl bg-[#191970]">
            <img src="${monst.image}" alt="${monst.name}" class="h-full w-full object-cover rounded-xl">
            <span class="absolute left-3 top-2 font-mono text-sm text-white">${monst.id}</span>
          </div>
          <div class="flex flex-col items-center justify-between gap-2">
            <h3 class="font-display text-xl text-white font-semibold">${monst.name}</h3>
            <div class="flex gap-2 items-center justify-center">
              <span class="rounded-full bg-[#F5B942] px-3 py-1 text-sm font-bold text-white">${monst.type}</span>
              <span class="rounded-full bg-[#191970] px-3 py-1 text-sm font-bold text-white">${monst.monsterType}</span>
              <span class="rounded-full bg-[#191970] px-3 py-1 text-sm font-bold text-white">${monst.race}</span>
            </div>
          </div>
          <p class="text-sm mx-auto text-white font-bold">ATK: ${monst.stats.atk} | DEF: ${monst.stats.def}</p>
          <p class="text-sm mx-auto font-bold text-white shadow-md">${stars}</p>
          <button type="button" class="bg-[#F5B942] p-2 rounded-md text-sm font-bold text-white hover:bg-[#F5B942]/90">Ajouter à l'équipe</button>
        `;
        containerCard.appendChild(card);
    }) ;
}
creerCards()


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
