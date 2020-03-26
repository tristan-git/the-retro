boutonPoste.addEventListener('click',funcAddPoste);

let i = 0;

  function funcAddPoste(){

    let messageToPoste = document.querySelector('#posteToAdd').value|| "Aucun commentaire ajouté.";
    let titreToPoste = document.querySelector("#titre").value;

    let identifiant = "article" + i;

    let createArticle = document.createElement('div');
      createArticle.id = identifiant;
      createArticle.className = "articleCase";
    document.getElementById('postCom').appendChild(createArticle);

    let creatTitle = document.createElement('h1');
      creatTitle.className = "TitreDuPoste";
      creatTitle.textContent = titreToPoste;
    document.getElementById(identifiant).appendChild(creatTitle);


    let creatPicture = document.createElement('div');
      creatPicture.className = "rondPicture";
          document.getElementById(identifiant).append(creatPicture);

    let articleTexte = document.createElement('p');
        articleTexte.textContent = messageToPoste;
        articleTexte.className = "courant";
    document.getElementById(identifiant).appendChild(articleTexte);

    i++;
}
