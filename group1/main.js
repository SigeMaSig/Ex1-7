// ข้อมูล Resume ของแต่ละคน
const members = [
    {
      name: "กฤษฎา",
      photo: "https://via.placeholder.com/100", // ใส่ URL ของรูปภาพ
      bio: "นักเรียนชั้น ม.1 ชอบเล่นฟุตบอล",
      contact: "Email: kritsada@example.com | โทร: 081-111-1111"
    },
    {
      name: "ทศพล",
      photo: "https://via.placeholder.com/100",
      bio: "นักเรียนชั้น ม.1 ชอบอ่านการ์ตูน",
      contact: "Email: thotsaphon@example.com | โทร: 081-222-2222"
    },
    {
      name: "ชามีกร",
      photo: "https://via.placeholder.com/100",
      bio: "นักเรียนชั้น ม.1 ชอบเขียนโปรแกรม",
      contact: "Email: chameekorn@example.com | โทร: 081-333-3333"
    }
  ];
  
  // เพิ่มข้อมูล Resume ลงใน HTML
  const profilesContainer = document.getElementById("profiles");
  
  members.forEach(member => {
    profilesContainer.innerHTML += `
      <div class="profile-card">
        <img src="${member.photo}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.bio}</p>
        <div class="contact">${member.contact}</div>
      </div>
    `;
  });
  