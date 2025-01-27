// ข้อมูลสินค้า
const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 2990,
      image: "https://cdn.pixabay.com/photo/2021/11/11/23/22/headphones-6787497_1280.jpg",
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest 5G smartphone with advanced features.",
      price: 15900,
      image: "https://cdn.pixabay.com/photo/2019/11/02/12/59/mobile-4596292_960_720.jpg",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      description: "High-performance laptop for gaming and work.",
      price: 45900,
      image: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg",
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "Fitness tracker with heart rate monitor and GPS.",
      price: 5900,
      image: "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and long battery life.",
      price: 2490,
      image: "https://cdn.pixabay.com/photo/2020/08/09/17/07/bose-5476087_1280.jpg",
    },
  ];
  
  // โหลดข้อมูลสินค้า
  function displayProducts() {
    const container = document.getElementById("product-container");
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h2 class="product-title">${product.name}</h2>
          <p class="product-description">${product.description}</p>
          <p class="product-price">฿${product.price.toLocaleString()}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
      container.appendChild(productCard);
    });
  }
  
  // ฟังก์ชันเพิ่มสินค้าไปยังตะกร้า
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      alert(`Added "${product.name}" to the cart!`);
    }
  }
  
  // เรียกฟังก์ชันแสดงสินค้าเมื่อโหลดหน้า
  document.addEventListener("DOMContentLoaded", displayProducts);
  