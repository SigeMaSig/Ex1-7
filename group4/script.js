// รายชื่อเพื่อน 40 คน พร้อมข้อมูล
const classmates = [
  { name: "Kritsada", age: 18, hobby: "Reading" },
  { name: "Thotsaphon", age: 19, hobby: "Football" },
  { name: "Chameekorn", age: 18, hobby: "Music" },
  { name: "Pawit", age: 18, hobby: "Gaming" },
  { name: "Wisarut", age: 19, hobby: "Drawing" },
  { name: "Praphat", age: 18, hobby: "Coding" },
  { name: "Thanaphon", age: 18, hobby: "Cycling" },
  { name: "Phongphat", age: 18, hobby: "Photography" },
  { name: "Puriphat", age: 19, hobby: "Traveling" },
  { name: "Suchada", age: 18, hobby: "Cooking" },
  { name: "Napat", age: 19, hobby: "Swimming" },
  { name: "Pimchanok", age: 18, hobby: "Dancing" },
  { name: "Narong", age: 18, hobby: "Running" },
  { name: "Somchai", age: 19, hobby: "Fishing" },
  { name: "Patcharaporn", age: 18, hobby: "Singing" },
  { name: "Kanokwan", age: 19, hobby: "Painting" },
  { name: "Ratchapol", age: 18, hobby: "Chess" },
  { name: "Kamonchanok", age: 18, hobby: "Yoga" },
  { name: "Nattapong", age: 18, hobby: "Basketball" },
  { name: "Anucha", age: 19, hobby: "Movies" },
  { name: "Woraphon", age: 18, hobby: "Writing" },
  { name: "Thanachai", age: 19, hobby: "Hiking" },
  { name: "Apirak", age: 18, hobby: "Camping" },
  { name: "Sukanya", age: 18, hobby: "Gardening" },
  { name: "Charin", age: 18, hobby: "Programming" },
  { name: "Patchara", age: 19, hobby: "Fitness" },
  { name: "Wanida", age: 18, hobby: "Fashion" },
  { name: "Siriwat", age: 18, hobby: "Guitar" },
  { name: "Yuthapong", age: 19, hobby: "Volunteering" },
  { name: "Thanawat", age: 18, hobby: "Martial Arts" },
  { name: "Prisana", age: 19, hobby: "Sculpting" },
  { name: "Manita", age: 18, hobby: "Collecting Stamps" },
  { name: "Prapon", age: 18, hobby: "Robotics" },
  { name: "Kanok", age: 18, hobby: "Astrophysics" },
  { name: "Saran", age: 19, hobby: "Photography" },
  { name: "Tawin", age: 18, hobby: "Calligraphy" },
  { name: "Narisa", age: 18, hobby: "Knitting" },
  { name: "Atthaporn", age: 18, hobby: "Magic Tricks" },
  { name: "Thitiya", age: 19, hobby: "Blogging" },
  { name: "Phuwadon", age: 18, hobby: "Video Editing" }
];

// แสดงข้อมูลเพื่อนในหน้าเว็บ
const classmatesList = document.getElementById('classmates');

// ฟังก์ชันสำหรับสร้างการ์ดของเพื่อน
function renderClassmates() {
  classmates.forEach((classmate) => {
    const card = document.createElement('div');
    card.className = 'classmate-card';
    card.innerHTML = `
      <h3>${classmate.name}</h3>
      <p>Age: ${classmate.age}</p>
      <p>Hobby: ${classmate.hobby}</p>
    `;
    classmatesList.appendChild(card);
  });
}

// เรียกใช้งานฟังก์ชัน
renderClassmates();
