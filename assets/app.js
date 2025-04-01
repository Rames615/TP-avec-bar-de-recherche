const products =[
    {
        image : "https://picsum.photos/200/300?random=1",
        type : "fruit",
        nom : "Banane",
        prix : "2,99€"
    },
    {
        image : "https://picsum.photos/200/300?random=2",
        type : "fruit",
        nom : "Pomme",
        prix : "2,99€"
    },
    {
        image : "https://picsum.photos/200/300?random=3",
        type : "fruit",
        nom : "Ananas",
        prix : "2,99€"
    },
    {
        image : "https://picsum.photos/200/300?random=4",
        type : "Legumes",
        nom : "Harricot vert",
        prix : "3,99€"
    },
    {
        image : "https://picsum.photos/200/200?random=5",
        type : "Legumes",
        nom : "Aubergine",
        prix : "2,99€"
    },
    {
        image : "https://picsum.photos/200/300?random=6",
        type : "Legumes",
        nom : "potato",
        prix : "2,99€"
    },
    {
        image : "https://picsum.photos/200/300?random=7",
        type : "Legumes",
        nom : "Poire",
        prix : "2,99€"
    },
    {
        image : "https://picsum.photos/200/300?random=8",
        type : "Legumes",
        nom : "Tomate",
        prix : "2,99€"
    },

];



const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("research");

// Function to display products
function displayProducts(filteredProducts) {
    productsContainer.innerHTML = ""; 

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = "<p>Aucun produit trouvé.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <img src="${product.image}" alt="${product.nom}" width="100">
            <h2>${product.type}</h2>
            <p><strong>${product.nom}</strong></p>
            <p>${product.prix}</p>
        `;
        productsContainer.appendChild(cardElement);
    });
}

// Initial display of all products
displayProducts(products);

// Search functionality
searchButton.addEventListener("click", function () {
    let searchQuery = searchInput.value.toLowerCase();

    let filteredProducts = products.filter(product => 
        product.nom.toLowerCase().includes(searchQuery)
    );

    displayProducts(filteredProducts);
});

// Live search as the user types
searchInput.addEventListener("input", function () {
    let searchQuery = searchInput.value.toLowerCase();

    let filteredProducts = products.filter(product => 
        product.nom.toLowerCase().includes(searchQuery)
    );

    displayProducts(filteredProducts);
});




// Formulaire pour ajouter des produits

// const form = document.querySelector('form');
// const button = document.getElementById('btn');
// const button1 = document.getElementById('btn1');
// const panier = document.querySelector('.panier');
// const nom = document.getElementById('nom');
// const detail = document.querySelector('#description');
// const title = document.querySelector('#titre');
// const imageV = document.querySelector('#image');



// button.addEventListener('click', function() {
//     panier.reset();
//   });
  

// function addCard(){
//     // e.preventDefault();
// const card = document.createElement('div');
// card.className = 'card';
// panier.appendChild(card);
// const image = document.createElement('img');
// image.src = imageV.value ;
// card.appendChild(image);

// const titre = document.createElement('h3');
// titre.textContent = title.value;
// card.appendChild(titre);

// const paragraph = document.createElement('p');
//  paragraph.textContent = detail.value;
//  card.appendChild(paragraph);

// }

// button1.addEventListener('click', function(e){
//     e.preventDefault();
//     if (imageV.value && title.value && detail.value){
//         addCard();
//     } else {
//         alert('Remplisez vous le champs !');
//     }
// });

/////////////////////////////////////////////////////////////////


// Ajouter un nouveau produit via le formulaire
productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newProduct = {
        nom: document.getElementById("product-name").value,
        type: document.getElementById("product-type").value,
        prix: document.getElementById("product-price").value + "€",
        image: document.getElementById("product-image").value,
    };

    products.push(newProduct);
    displayProducts(products);

    productForm.reset();
});





























// const buttonAjouter = document.querySelector('#ajouter')
// const form = document.querySelector('.formulaire');
// const produit = document.querySelector('#search-input');
// const descriptionV = document.querySelector('#description');
// const prix = document.querySelector('#titre');


// function addCard(){
//     // e.preventDefault();
// const card = document.createElement('div');
// card.className = 'card';
// form.appendChild(card);
// const produit1 = document.createElement('card');
// produit1.src = produit.value ;
// card.appendChild(produit1);

// const price = document.createElement('h3');
// price.textContent = prix.value;
// card.appendChild(price);

// const paragraph = document.createElement('p');
//  paragraph.textContent = descriptionV.value;
//  card.appendChild(paragraph);

// }

// // button1.addEventListener('click',addCard);
// buttonAjouter.addEventListener('click', function(e){

// e.preventDefault();
//     if (produit.value ){
//         addCard();
//     } else {
//         alert('Aucune carte à supprimer !');
//     }
// });

