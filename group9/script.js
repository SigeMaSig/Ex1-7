// ข้อมูลร้านคาเฟ่แมว
const cafes = [
    {
      name: "Meow Meow Café",
      description: "คาเฟ่แมวเล็กๆ สุดอบอุ่น พร้อมอาหารและขนมหวานแสนอร่อย",
      image: "https://blog.ynotfly.com/wp-content/uploads/2019/04/cover-cat-cafe-1140x599.jpg",
    },
    {
      name: "Cat Paradise",
      description: "คาเฟ่แมวที่รวบรวมแมวพันธุ์หายาก บรรยากาศผ่อนคลาย",
      image: "https://img.salehere.co.th/p/1200x0/2024/02/20/cdarlkljh6ta.jpg",
    },
    {
      name: "Kitty Kingdom",
      description: "อาณาจักรแมวสุดหรู พร้อมกิจกรรมสนุกๆ ให้เล่นกับน้องแมว",
      image: "https://i.ytimg.com/vi/n_3LzqU-q8A/maxresdefault.jpg",
    },
    {
      name: "Purrfect Café",
      description: "ที่พักผ่อนสำหรับคนรักแมว พร้อมเครื่องดื่มที่ดีที่สุด",
      image: "https://cdni-hw.bugaboo.tv/dm/sz-md/i/images/2023/08/25/1__1692932113_3273.jpg",
    },
    {
      name: "Furball Heaven",
      description: "คาเฟ่แมวสุดน่ารัก มีพื้นที่ให้เล่นกับน้องแมวแบบสบายๆ",
      image: "https://www.petcitiz.info/wp-content/uploads/2017/01/catcafe.jpg",
    },
  ];
  
  // แสดงข้อมูลร้านคาเฟ่แมว
  function displayCafes() {
    const container = document.getElementById("cafe-container");
    cafes.forEach((cafe) => {
      const cafeCard = document.createElement("div");
      cafeCard.className = "cafe-card";
  
      cafeCard.innerHTML = `
        <img src="${cafe.image}" alt="${cafe.name}" class="cafe-image">
        <div class="cafe-info">
          <h2 class="cafe-name">${cafe.name}</h2>
          <p class="cafe-description">${cafe.description}</p>
        </div>
      `;
      container.appendChild(cafeCard);
    });
  }
  
  // เรียกฟังก์ชันแสดงร้านคาเฟ่เมื่อโหลดหน้า
  document.addEventListener("DOMContentLoaded", displayCafes);
  