# Fonctionnalité de Recherche - Méthodes JavaScript Utilisées

Voici les principales méthodes JavaScript

## 1. `querySelector`

- **Description** : Sélectionne un élément HTML dans le DOM.
- **Exemple** :
  ```javascript
  const inputProduitRecherche = document.querySelector("#rechercher");
  const containerProduits = document.querySelector("#liste_produits");
  ```

## 2. `addEventListener`

- **Description** : Ajoute un écouteur d'événements à un élément HTML.
- **Exemple** :
  ```javascript
  boutonProduitRecherche.addEventListener("click", rechercherProduit);
  inputProduitRecherche.addEventListener("input", rechercherProduit);
  ```

## 3. `value`

- **Description** : Récupère ou définit la valeur d'un élément HTML.
- **Exemple** :
  ```javascript
  const texteRecherche = inputProduitRecherche.value.toLowerCase();
  ```

## 4. `toLowerCase`

- **Description** : Convertit une chaîne de caractères en minuscules.
- **Exemple** :
  ```javascript
  produit.nom.toLowerCase().includes(texteRecherche);
  ```

## 5. `filter`

- **Description** : Crée un nouveau tableau contenant tous les éléments qui passent le test implémenté par la fonction fournie.
- **Exemple** :
  ```javascript
  const produitsRecherches = produits.filter((produit) =>
    produit.nom.toLowerCase().includes(texteRecherche)
  );
  ```

## 6. `includes`

- **Description** : Vérifie si une chaîne de caractères contient une autre chaîne de caractères.
- **Exemple** :
  ```javascript
  produit.nom.toLowerCase().includes(texteRecherche);
  ```

## 7. `innerHTML`

- **Description** : Définit ou récupère le contenu HTML d'un élément.
- **Exemple** :
  ```javascript
  containerProduits.innerHTML = ""; // Efface le contenu précédent
  containerProduits.innerHTML += `<div>${produit.nom}</div>`; // Ajoute un nouveau produit
  ```

## 8. `forEach`

- **Description** : Exécute une fonction donnée sur chaque élément d'un tableau.
- **Exemple** :
  ```javascript
  produitsRecherches.forEach((produit) => {
    containerProduits.innerHTML += `<div>${produit.nom}</div>`;
  });
  ```

## 9. `createElement`

- **Description** : Crée un nouvel élément HTML.
- **Exemple** :
  ```javascript
  const divProduit = document.createElement("div");
  divProduit.innerHTML = produit.nom;
  containerProduits.appendChild(divProduit);
  ```

## 10. `classList.add`

- **Dessciption** : Ajoute une ou plusieurs classes CSS à un élément.
- **Exemple** :
  ```javascript
  divProduit.classList.add("produit");
  ```

## 11. `appendChild`

- **Description** : Ajoute un élément enfant à un élément parent dans le DOM.
- **Exemple** :
  ```javascript
  containerProduits.appendChild(divProduit);
  ```

## 12. `style`

- **Description** : Permet de manipuler le style CSS d'un élément.
- **Exemple** :
  ```javascript
  divProduit.style.color = "red"; // Change la couleur du texte en rouge
  ```

## 13. `setTimeout`

- **Description** : Appelle une fonction après un certain délai.
- **Exemple** :
  ```javascript
  setTimeout(() => {
    containerProduits.innerHTML = ""; // Efface le contenu après 2 secondes
  }, 2000);
  ```

## 14. `setInterval`

- **Description** : Appelle une fonction à intervalles réguliers.
- **Exemple** :
  ```javascript
  setInterval(() => {
    console.log("Cette fonction s'exécute toutes les 2 secondes");
  }, 2000);
  ```

## 15. `clearInterval`

- **Description** : Arrête l'exécution d'une fonction appelée par `setInterval`.
- **Exemple** :
  ```javascript
  const intervalId = setInterval(() => {
    console.log("Cette fonction s'exécute toutes les 2 secondes");
  }, 2000);
  clearInterval(intervalId); // Arrête l'intervalle
  ```

## 16. `clearTimeout`

- **Description** : Annule l'exécution d'une fonction appelée par `setTimeout`.
- **Exemple** :
  ```javascript
  const timeoutId = setTimeout(() => {
    console.log("Cette fonction ne s'exécutera pas");
  }, 2000);
  clearTimeout(timeoutId); // Annule le timeout
  ```

## 17. `JSON.stringify`

- **Description** : Convertit un objet JavaScript en chaîne JSON.
- **Exemple** :
  ```javascript
  const produitJSON = JSON.stringify(produit);
  ```

## 18. `JSON.parse`

- **Description** : Convertit une chaîne JSON en objet JavaScript.
- **Exemple** :
  ```javascript
  const produitObjet = JSON.parse(produitJSON);
  ```

## 19. `localStorage.setItem`

- **Description** : Enregistre une valeur dans le stockage local du navigateur.
- **Exemple** :
  ```javascript
  localStorage.setItem("produit", produitJSON);
  ```

## 20. `localStorage.getItem`

- **Description** : Récupère une valeur du stockage local du navigateur.
- **Exemple** :
  ```javascript
  const produitJSON = localStorage.getItem("produit");
  ```

## 21. `localStorage.removeItem`

- **Description** : Supprime une valeur du stockage local du navigateur.
- **Exemple** :
  ```javascript
  localStorage.removeItem("produit");
  ```

## 22. `localStorage.clear`

- **Description** : Supprime toutes les valeurs du stockage local du navigateur.
- **Exemple** :
  ```javascript
  localStorage.clear(); // Efface tout le stockage local
  ```

## 23. `console.log`

- **Description** : Affiche des messages dans la console du navigateur.
- **Exemple** :
  ```javascript
  console.log("Produit trouvé :", produit);
  ```

## 24. `map`

- **Description** : Crée un nouveau tableau contenant les résultats de l'appel d'une fonction fournie sur chaque élément du tableau d'origine.
- **Exemple** :
  ```javascript
  const nomsProduits = produits.map((produit) => produit.nom); // retourne un tableau contenant les noms de tous les produits
  const nomsProduits = produits.map((produit) => produit.nom.length > 10); // retourne un tableau contenant les noms de tous les produits qui ont plus de 10 caractères
  ```

## 25. `reduce`

- **Description** : Applique une fonction contre un accumulateur et chaque élément du tableau (de gauche à droite) pour réduire le tableau à une seule valeur.
  Laccumulateur est la valeur accumulée, et le produit est l'élément actuel du tableau.
- **Exemple** :
  ```javascript
  const totalPrix = produits.reduce(
    (accumulateur, produit) => accumulateur + produit.prix,
    0
  ); // retourne le prix total de tous les produits
  ```
