function searchSideBar() {
    // relier l'id de la sidebar (hmtl) pour la retrouver dans la recherche JS
    let input = document.getElementById("searchBar").value;
    // La méthode toLowerCase() convertit une chaîne de caractères en lettres minuscules (pour être sûr d'avoir une recherche effective)
    input = input.toLowerCase();
    // relier aux class articles pour retrouver les éléments
    let x = document.getElementsByClassName("tagcloudliste");
  
    // Un tableau  est stocké dans x. Il contient toutes les listes dont l'identifiant est id="artciles".
    //Ensuite, une boucle est lancée pour vérifier si le HTML interne de chaque document inclut la sous-chaîne d'entrée.
    // Si ce n'est pas le cas, la propriété d'affichage est définie sur "None" de sorte qu'elle soit invisible
  
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "";
      }
    }
  }
  
  /////////////////////////////////////////////////////////////////////////////////