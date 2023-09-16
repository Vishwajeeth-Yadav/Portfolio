const swiper = new Swiper('.swiper', {
    
    loop: true,

    autoplay: {
        delay:3000,
        disableOnTneraction: false,
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //products

  const productsData = [
    {
      title: "GT-1000 10",
      imageSrc: "img1.avif",
      description: "Men Running",
      price:"₹8999"
    },
    {
      title: "METASPEED EDGE+",
      imageSrc: "img2.avif",
      description:"Unisex Road Running",
      price:"₹21999"
    },
    {
      title: " SPRL SLIDE",
      imageSrc: "img3.avif",
      description: "Unisex Athletic walking.",
      price:"₹1320"
    },
    {
        title: "SPIRAL LOGO BACK PACK",
        imageSrc: "img4.avif",
        description: "Unisex Bags & Packs.",
        price:"₹2799"
      },
      {
        title: "MICT MINI MC",
        imageSrc: "img5.avif",
        description: "Kids Running.",
        price:"₹2099"
      },
      {
        title: "GRAPHIC PRINT CAP",
        imageSrc: "img6.avif",
        description: "Unisex Accessories.",
        price:"₹569"
      },

    
  ];

  
  function displayProducts() {
    const productsContainer = document.querySelector(".products");

    
    productsData.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      // Product image
      const imageElement = document.createElement("img");
      imageElement.src = product.imageSrc;
      productElement.appendChild(imageElement);
      
       // Product title
       const titleElement = document.createElement("h2");
       titleElement.textContent = product.title;
       productElement.appendChild(titleElement);

      // Product description
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = product.description;
      productElement.appendChild(descriptionElement);
      
      // Product price
    const priceElement = document.createElement("h2");
    priceElement.textContent = "Price: " + product.price;
    productElement.appendChild(priceElement);
     
      // "Add to Cart" button
  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.classList.add("add-to-cart");
  productElement.appendChild(addToCartButton);

  // Add the click event listener to the "Add to Cart" button
  addToCartButton.addEventListener("click", () => {
    // Retrieve the index of the selected product
    const index = productsData.indexOf(product);
    // Add the selected product to the cart
    addtocart(productsData[index]);
  });

  // Add the product element to the products container
  productsContainer.appendChild(productElement);
});
}
 // Call the function to display products when the page loads
  window.addEventListener("load", displayProducts);




  