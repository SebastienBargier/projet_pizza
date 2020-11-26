document.addEventListener("DOMContentLoaded", function () {

  var boutonPlus = document.querySelectorAll(".plus");
  var boutonMoins = document.querySelectorAll(".moins");
  var compteur = document.querySelectorAll(".compteur");
  var sousTotal = document.querySelectorAll(".soustotal");
  var prixPizza = document.querySelectorAll(".prixpizza");
  var prixTotal = document.querySelector(".prixtotal");
  var recap = document.querySelector(".recap");
  var pizza = document.querySelectorAll(".pizza");
  var paypal = document.querySelector("#smart-button-container");
  

 let total = 0;

const commande = [];
function recapii(i) {
if (parseInt(compteur[i].innerHTML) > 0) {
commande[i] = pizza[i].innerHTML + " x " + parseInt(compteur[i].innerHTML)+ " / ";
} else {
  commande[i] = "";
}
recap.innerHTML = commande.join("");
}
        
          boutonPlus.forEach((plus, i) => {
              plus.addEventListener('click', function() {
                compteur[i].innerHTML++;
                var valueSousTotal = parseInt (sousTotal[i].innerHTML);
                var valueCompteur = parseInt (compteur[i].innerHTML);
                var valuePrixPizza = parseInt (prixPizza[i].innerHTML);
                valueSousTotal = valueCompteur * valuePrixPizza;
                sousTotal[i].innerHTML = valueSousTotal;
                prixTotal.innerHTML = total +=  parseInt (prixPizza[i].innerHTML);
                recapii(i);
                if ((prixTotal.innerHTML) > 0) {
                  paypal.style.display = "block";
                } else {
                  paypal.style.display = "none";
                }
              
                });
          });
      
          boutonMoins.forEach((moins, i) => {
              moins.addEventListener('click', function() {
                if (compteur[i].innerHTML <= 0) return;
                compteur[i].innerHTML--;
                var valueSousTotal = parseInt (sousTotal[i].innerHTML);
                var valueCompteur = parseInt (compteur[i].innerHTML);
                var valuePrixPizza = parseInt (prixPizza[i].innerHTML);
                valueSousTotal = valueCompteur * valuePrixPizza;
                sousTotal[i].innerHTML = valueSousTotal;
                prixTotal.innerHTML = total -=  parseInt ((prixPizza[i].innerHTML),10);
                recapii(i);
                if ((prixTotal.innerHTML) > 0) {
                    paypal.style.display = "block";
                  } else {
                    paypal.style.display = "none";
                  }

                });   
          });
});

