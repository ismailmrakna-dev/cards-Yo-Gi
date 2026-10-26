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
        card.className=`cardMonst h-150 flex flex-col gap-3 bg-[url('../images/bg-card.jpg')] bg-cover bg-center rounded-md p-3 pb-4 
        hover:scale-105 hover:shadow-lg hover:shadow-[#F5B942]/50 transition-all duration-300"`
        card.innerHTML=`
          <div class="relative flex h-2/3 items-center text-white justify-center rounded-xl bg-[#191970]">
            <img src="${monst.image}" alt="${monst.name}" class="h-full w-full object-cover rounded-xl">
            <span class="absolute left-3 top-2 font-mono text-sm text-white">${monst.id}</span>
          </div>
          <div class="flex flex-col items-center justify-between gap-2">
            <h3 class="font-display text-xl text-white font-semibold">${monst.name}</h3>
            <div class="flex gap-2 items-center justify-center">
              <span id="sptypecard" class="sptypecard rounded-full bg-[#F5B942] px-3 py-1 text-sm font-bold text-white">${monst.type}</span>
              <span class="rounded-full bg-[#191970] px-3 py-1 text-sm font-bold text-white">${monst.monsterType}</span>
              <span class="rounded-full bg-[#191970] px-3 py-1 text-sm font-bold text-white">${monst.race}</span>
            </div>
          </div>
          <p class="text-sm mx-auto text-white font-bold">ATK: ${monst.stats.atk} | DEF: ${monst.stats.def}</p>
          <p class="text-sm mx-auto font-bold text-white shadow-md">${stars}</p>
          <button type="button" class="bg-[#F5B942] p-2 rounded-md text-sm font-bold text-white hover:bg-[#F5B942]/90">Ajouter à l'équipe</button>
        `;
        card.style.cursor= "pointer";
        card.addEventListener("click",()=>{
          afficheDetail(monst)
        })
        containerCard.appendChild(card);
    });
}


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------
creerCards()


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------
function afficheDetail(monst){
  const detail=document.querySelector("#detailCard")
  const image=detail.querySelector("img")
  const idMonster=detail.querySelector("#spanId")
  const nom=detail.querySelector("h2")
  const imgType=detail.querySelector("#imgType")
  const type=detail.querySelector("#spanType")
  const monstype=detail.querySelector("#spMonsterType")
  const race=detail.querySelector("#spRace")

  const description=detail.querySelector("#pDescription")
  const effect=detail.querySelector("#spEffect")
  const lvl=detail.querySelector("#pLvl")
  const atk=detail.querySelector("#spAtk")
  const def=detail.querySelector("#spDef")
  const atkVal=detail.querySelector("#spAtkVal")
  const defVal=detail.querySelector("#spDefVal")
  let stars=""
  for(let i=0;i<monst.stats.level; i++){
      stars += "⭐"
  } 
  image.src=monst.image
  image.alt=monst.name
  nom.textContent=monst.name
  monstype.textContent=monst.monsterType
  race.textContent=monst.race
  idMonster.textContent=`#${monst.id} . Détail`
  type.textContent=monst.type
  for(const typec in typesCard){
    if (typec === monst.type){
      imgType.src=typesCard[typec]
      break
    }
  }


  description.textContent=monst.description
  if(monst.effect===null){
    effect.textContent="Aucune Effect"
  }
  else{
    effect.textContent=monst.effect
  }
  lvl.textContent=stars
  atkVal.textContent= monst.stats.atk
  let perA = Math.min((monst.stats.atk/5000)*100,100)
  atk.style.width=perA+"%"
  let perD=Math.min(((monst.stats.def)/5000)*100,100)
  defVal.textContent= monst.stats.def
  def.style.width=perD+"%" 

}

// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------
function searchNom(){
  const search=document.querySelector("#search")
  const cards=document.querySelectorAll(".cardMonst")
  search.addEventListener("input",(event)=>{
    const name=event.target.value.toLowerCase().trim()
    cards.forEach((card)=>{
      const  text=card.querySelector("h3")
      const targCard=text.textContent.toLowerCase()
      if(targCard.includes(name)){
        card.style.display=""
        
      }
      else card.style.display="none"
    })
    

  })
}
 searchNom()


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------
function filtreType(){
  const filter=document.querySelector("#filters")
  const cards=document.querySelectorAll(".cardMonst")
  filter.addEventListener("click",(event)=>{
    const clickbtn = event.target.closest("#btn-filter");
    if(!clickbtn) return
  // 3. Filter the items
    filter.querySelectorAll("#btn-filter").forEach(btn=>btn.style.background="white")
    clickbtn.style.background="#F5B942"
    const filterValue = clickbtn.textContent.toLowerCase().trim()
    cards.forEach((card)=>{
      if(filterValue==="all"){
        card.style.display=""
      }
      else{
        const text=card.querySelector("#sptypecard")
        const targCard=text.textContent.toLowerCase()
        if(targCard === filterValue){
          card.style.display=""
        }
        else card.style.display="none"
      }
      
    })
  })
}
filtreType()


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------

function creerOneCard(){
  const form= document.querySelector("#creature-form")
  form.addEventListener('submit',(event)=>{
     event.preventDefault()
     const id = form.elements['id'];
     const name = form.elements['name'];
     if(!id.value.includes("#") && id.value.length===3){
      const message=id.querySelector("span")
      message.textContent="!Valid"
     }
     else{
      const message=id.querySelector(".error-message")
      message.textContent="!No Valid ID"
     }
     
  })

}
function showError(id,message){
  const form= document.querySelector("#creature-form")
  const label=form.getElementById('id');
  const error=label.querySelector('.error-message');
  error.textContent=message
  return error
}
function clearError(){
  const errors=document.querySelectorAll(".error-message")
  errors.forEach(msg => {
    msg.textContent ='';
    msg.style.display = 'none';
  });
}



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
