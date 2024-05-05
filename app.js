const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Headphones",
      price: 129.99,
      category: "Electronics"
    },
    {
      id: 3,
      name: "T-shirt",
      price: 19.99,
      category: "Clothing"
    },
    {
      id: 4,
      name: "Smartphone",
      price: 699.99,
      category: "Electronics"
    },
    {
      id: 5,
      name: "Sneakers",
      price: 79.99,
      category: "Footwear"
    },
    {
      id: 6,
      name: "Watch",
      price: 249.99,
      category: "Accessories"
    },
    {
      id: 7,
      name: "Backpack",
      price: 49.99,
      category: "Accessories"
    },
    {
      id: 8,
      name: "Dress",
      price: 39.99,
      category: "Clothing"
    },
    {
      id: 9,
      name: "Gaming Console",
      price: 399.99,
      category: "Electronics"
    },
    {
      id: 10,
      name: "Jeans",
      price: 59.99,
      category: "Clothing"
    },
    {
      id: 11,
      name: "Speaker",
      price: 149.99,
      category: "Electronics"
    },
    {
      id: 12,
      name: "Running Shoes",
      price: 89.99,
      category: "Footwear"
    },
    {
      id: 13,
      name: "Sunglasses",
      price: 129.99,
      category: "Accessories"
    },
    {
      id: 14,
      name: "Camera",
      price: 799.99,
      category: "Electronics"
    },
    {
      id: 15,
      name: "Hoodie",
      price: 34.99,
      category: "Clothing"
    }
  ];
//   products.img = img


  const div = document.querySelector('#cards')
//   const img = document.querySelector('img')

  
  
    for(let i = 0 ; i <= products.length; i++){
     div.innerHTML += `
     <div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">${products[i].name}</h5>
       <h6 class="card-subtitle mb-2 text-body-secondary">${products[i].price}</h6>
       <p class="card-text">${products[i].category}</p>
       <a href="#"  class="card-link">add to card</a>
     </div>
   </div>
     `
    }
  
  














