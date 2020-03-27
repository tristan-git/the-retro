// Vérification de la longueur du pseudo saisi
document.querySelector("#pseudo").addEventListener("change", function(event) {
  let inputpseudo = document.querySelector("#pseudo");
  if (inputpseudo.value.length < 3) {
    document.getElementById("aidePseudo").innerHTML =
      '<img src=../img/non.png width="15px" height="15px">' +
      "  Entrez 3 caractères minimum";
  } else {
    document.getElementById("aidePseudo").innerHTML =
      '<img src=../img/oui.jpeg width="15px" height="15px">' + "    Validé";
  }
});

// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function(event) {
  let mdp = event.target.value; // Valeur saisie dans le champ mdp
  let longueurMdp = "faible";
  let couleurMsg = "red"; // Longueur faible => couleur rouge
  if (mdp.length >= 8) {
    longueurMdp = "suffisante";
    couleurMsg = "green"; // Longueur suffisante => couleur verte
  } else if (mdp.length >= 4) {
    longueurMdp = "moyenne";
    couleurMsg = "orange"; // Longueur moyenne => couleur orange
  }
  let aideMdpElt = document.getElementById("aideMdp");
  aideMdpElt.textContent = "Sécurité : " + longueurMdp; // Texte de l'aide
  aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide

  let aideMdpChi = document.getElementById("aideMdpChi");
  aideMdpChi.textContent = " + Chiffre";
  aideMdpChi.style.color = "red";
  let aideMdpCs = document.getElementById("aideMdpCs");
  aideMdpCs.textContent = " + Caractère spécial";
  aideMdpCs.style.color = "red";
});

document.getElementById("mdp").addEventListener("input", function(event) {
  let mdp = event.target.value;
  const regex = /[A-Z]/g;
  const found = mdp.match(regex);
  let aideMdpMaj = document.getElementById("aideMdpMaj");
  aideMdpMaj.textContent = " + Majuscule";
  aideMdpMaj.style.color = "red";
  if (found == null) {
    aideMdpMaj.style.color = "red";
  } else {
    if (found.length > 0) aideMdpMaj.style.color = "green";
  }
});

document.getElementById("mdp").addEventListener("input", function(event) {
  let mdp = event.target.value;
  const regex = /[0-9]/g;
  const found = mdp.match(regex);
  let aideMdpMaj = document.getElementById("aideMdpChi");
  aideMdpMaj.textContent = " + Chiffre";
  aideMdpMaj.style.color = "red";
  if (found == null) {
    aideMdpMaj.style.color = "red";
  } else {
    if (found.length > 0) aideMdpMaj.style.color = "green";
  }
});

document.getElementById("mdp").addEventListener("input", function(event) {
  let mdp = event.target.value;
  const regex = /[!"#$%&'(;)+=/@?,.§]/g;
  const found = mdp.match(regex);
  let aideMdpCs = document.getElementById("aideMdpCs");
  aideMdpCs.textContent = " + Caractère spécial";
  aideMdpCs.style.color = "red";
  if (found == null) {
    aideMdpCs.style.color = "red";
  } else {
    if (found.length > 0) aideMdpCs.style.color = "green";
  }
});

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function(event) {
  // Correspond à une chaîne de la forme xxx@yyy.zzz
  let regexCourriel = /.+@.+\..+/;
  let validiteCourriel = "";
  if (!regexCourriel.test(event.target.value)) {
    validiteCourriel = "Adresse invalide";
    document.getElementById("aideCourriel").style.color = "red";
  }
  document.getElementById("aideCourriel").textContent = validiteCourriel;
});
const AfficheMdp = () => {
  let x = document.getElementById("mdp");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};
const confirAfficheMdp = () => {
  let x = document.getElementById("confirMdp");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};
/* const reset = () => {
    let elementPseudo = document.getElementById("aidePseudo");
    while (elementPseudo.firstChild) {
      elementPseudo.removeChild(elementPseudo.firstChild);
    }
    let elementMdp = document.getElementById("aideMdp");
    while (elementMdp.firstChild) {
      elementMdp.removeChild(elementMdp.firstChild);
    }
    let elementconfirMdp = document.getElementById("confirAideMdp");
    while (elementconfirMdp.firstChild) {
      elementconfirMdp.removeChild(elementconfirMdp.firstChild);
    }
    document.getElementById("pseudo").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("mdp").value = "";
    document.getElementById("courriel").value = "";
    document.getElementById("confirMdp").value = "";
  }; */

// Vérification de la confirmation du mot de passe saisi
document.getElementById("confirMdp").addEventListener("input", function(event) {
  let confirMdp = event.target.value; // Valeur saisie dans le champ mdp
  let couleurMsg = "red";
  let x = document.getElementById("mdp");
  let y = document.getElementById("confirMdp");
  let confirAideMdpElt = document.getElementById("confirAideMdp");
  if (x.value === y.value) {
    couleurMsg = "green";
    confirAideMdpElt.style.color = couleurMsg;
    document.getElementById("confirAideMdp").innerHTML =
      '<img src=../images/oui.jpeg width="15px" height="15px">' + "    Validé";
  } else {
    confirAideMdpElt.textContent = "Non valide"; // Texte de l'aide
    confirAideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
  }
});
