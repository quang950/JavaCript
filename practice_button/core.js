// tạo 1 hàm khi clack
const btn = document.querySelector('.class');
const result = document.querySelector('#result');

// 1. Hàm tạo số ngẫu nhiên từ 0 đến max
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

// 2. Lắng nghe sự kiện Click
btn.addEventListener('click', () => {
  // Tạo ra 3 con số ngẫu nhiên cho R, G, B
  const r = getRandomNumber(255);
  const g = getRandomNumber(255);
  const b = getRandomNumber(255);
  
  // Tổng hợp thành chuỗi màu
  const randomColor = `rgb(${r}, ${g}, ${b})`;
  
  // 3. "Nắm đầu" cái div và đổi màu nền của nó
  result.style.backgroundColor = randomColor;
  
  // Hiển thị mã màu cho oai
  result.innerText = `Mã màu hiện tại: ${randomColor}`;
});