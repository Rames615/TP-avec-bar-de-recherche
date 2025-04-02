const products =[
    {
        image : "https://picsum.photos/200/300?random=1",
        type : "fruit",
        nom : "Banane",
        prix : "2,99"
    },
    {
        image : "https://picsum.photos/200/300?random=2",
        type : "fruit",
        nom : "Pomme",
        prix : "2,99"
    },
    {
        image : "https://picsum.photos/200/300?random=3",
        type : "fruit",
        nom : "Ananas",
        prix : "2,99"
    },
    {
        image : "https://picsum.photos/200/300?random=4",
        type : "Legumes",
        nom : "Harricot vert",
        prix : "3,99"
    },
    {
        image : "https://picsum.photos/200/200?random=5",
        type : "Legumes",
        nom : "Aubergine",
        prix : "2,99"
    },
    {
        image : "https://picsum.photos/200/300?random=6",
        type : "Legumes",
        nom : "potato",
        prix : "2,99"
    },
    {
        image : "https://picsum.photos/200/300?random=7",
        type : "Legumes",
        nom : "Poire",
        prix : "2,99"
    },
    {
        image : "https://picsum.photos/200/300?random=8",
        type : "Legumes",
        nom : "Tomate",
        prix : "2,99"
    },

];

// Ces trois constantes récupèrent des éléments HTML via leur id

const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("research");

// Function to display products
function displayProducts(filteredProducts) {
    productsContainer.innerHTML = ""; // On vide d'abord le contenu (innerHTML = "") pour éviter d'ajouter des doublons.
    productsContainer.innerHTML = ""; 

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = "<p>Aucun produit trouvé.</p>";
        return;
    }
    
// On boucle sur la liste des produits filtrés.
    filteredProducts.forEach(product => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <img src="${product.image}" alt="${product.nom}" >
            <h2>${product.type}</h2>
            <p>${product.nom}</p>
            <p><strong>${product.prix} €</strong></p>
        `;
        productsContainer.appendChild(cardElement);
    });
}

// On affiche les produits filtrés
displayProducts(products);

// Search functionality via bouton
searchButton.addEventListener("click", function () {
    let searchQuery = searchInput.value.toLowerCase();

// On récupère la valeur de l'input et on la met en minuscules (toLowerCase()) pour une recherche insensible à la casse.
    let filteredProducts = products.filter(product => 
        product.nom.toLowerCase().includes(searchQuery)
    );

    displayProducts(filteredProducts);
});

// // On écoute chaque frappe de l'utilisateur.
// searchInput.addEventListener("input", function () {
//     let searchQuery = searchInput.value.toLowerCase();

//     let filteredProducts = products.filter(product => 
//         product.nom.toLowerCase().includes(searchQuery)
//     );

//     displayProducts(filteredProducts);
// });




// Formulaire pour ajouter des produits

const form = document.querySelector('form');
const button = document.getElementById('btn');
const button1 = document.getElementById('btn1');
const panier = document.querySelector('.panier');
const nom = document.querySelector('#nom');
const title = document.querySelector('#titre');
const price = document.querySelector('#prix');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="https://picsum.photos/200/300?random=${Math.random()}">
    <h3> ${nom.value}</h3>
    <p>${title.value}</p>
    <p>${price.value}</p>
    `;
    productsContainer.appendChild(card);
    form.reset();
}
);

////////////////////////////////////////////////////////////////

// function addCard(){
    
// const card = document.createElement('div');
// card.className = 'card';
// productsContainer.appendChild(card);
// const image = document.createElement('img');
// image.src = "https://picsum.photos/200/200?random=${Math.random()"
// card.appendChild(image);
// const name = document.createElement('h3');
// name.textContent = nom.value ;
// card.appendChild(name);

// const titre = document.createElement('h3');
// titre.textContent = title.value;
// card.appendChild(titre);

// const description = document.createElement('p');
// description.textContent = price.value;
//  card.appendChild(description);

// }

// button1.addEventListener('click', function(e){
//     e.preventDefault();
//     if (nom.value && title.value && price.value){
//         addCard();
//     } else {
//         alert('Remplisez vous le champs !');
//     }
// });

// button.addEventListener('click', function() {
//     panier.reset();
//   });