let products = [
    { id: 1, name: "Instant Noodles", category: "Food", stock: 50, price: 12 },
    { id: 2, name: "Bottled Water", category: "Drink", stock: 100, price: 10 },
    { id: 3, name: "Canned Coffee", category: "Drink", stock: 30, price: 25 },
    { id: 4, name: "Shampoo", category: "Personal Care", stock: 20, price: 45 },
    { id: 5, name: "Toothpaste", category: "Personal Care", stock: 40, price: 35 },
    { id: 6, name: "Chips", category: "Snack", stock: 60, price: 20 },
    { id: 7, name: "Candy", category: "Snack", stock: 200, price: 5 },
    { id: 8, name: "Soft Drink", category: "Drink", stock: 80, price: 15 },
    { id: 9, name: "Soap", category: "Personal Care", stock: 25, price: 30 },
    { id: 10, name: "Milk", category: "Drink", stock: 50, price: 20 },
  ];
  
  function loadProducts() {
    const tableBody = document.getElementById("product-table");
    tableBody.innerHTML = ""; // ล้างข้อมูลเดิมก่อนแสดงใหม่
    products.forEach((product, index) => {
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${product.name}</td>
          <td>${product.category}</td>
          <td>${product.stock}</td>
          <td>${product.price.toFixed(2)}</td>
          <td>
            <button onclick="deleteProduct(${product.id})">Delete</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }
  
  function updateStock() {
    const productId = parseInt(document.getElementById("product-id").value);
    const newStock = parseInt(document.getElementById("new-stock").value);
  
    const product = products.find((p) => p.id === productId);
  
    if (product) {
      product.stock = newStock;
      alert(`Updated stock for ${product.name} to ${newStock}`);
      loadProducts(); // โหลดรายการใหม่
    } else {
      alert("Product not found!");
    }
  }
  
  function deleteProduct(id) {
    products = products.filter((product) => product.id !== id);
    alert(`Deleted product with ID: ${id}`);
    loadProducts(); // โหลดรายการใหม่
  }
  
  document.getElementById("update-stock-btn").addEventListener("click", updateStock);
  document.addEventListener("DOMContentLoaded", loadProducts);
  