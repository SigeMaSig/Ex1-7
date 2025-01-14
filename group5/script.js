let currentSlide = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const totalSlides = slider.children.length;

  // ตรวจสอบขอบเขต
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  // เปลี่ยนตำแหน่งของ slider
  const offset = -currentSlide * 800; // ความกว้างของภาพ
  slider.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// แสดงภาพแรกเมื่อโหลดหน้า
showSlide(0);
