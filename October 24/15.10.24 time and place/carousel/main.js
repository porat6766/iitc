const carousel = document.getElementById("carousel"); // הקרוסלה
const images = document.querySelectorAll(".img-item"); // כל התמונות
const prevBtn = document.querySelector(".prev-btn"); // כפתור הקודם
const nextBtn = document.querySelector(".next-btn"); // כפתור הבא
const indicators = document.querySelectorAll(".indicator"); // אינדיקטורים

console.log(images);
///
let currentIndex = 0;

const updateCarousel = () => {
  carousel.style.transform = `translateX(-${currentIndex * 300}px)`;
};
nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex === images.length - 1 ? 0 : ++currentIndex;
  //
  updateCarousel();
  console.log(currentIndex);
  //
});

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : --currentIndex;
  //
  updateCarousel();
  console.log(currentIndex);
  //
});

// const carousel = document.getElementById("carousel"); // הקרוסלה
// const images = document.querySelectorAll(".img-item"); // כל התמונות
// const prevBtn = document.querySelector(".prev-btn"); // כפתור הקודם
// const nextBtn = document.querySelector(".next-btn"); // כפתור הבא
// const indicators = document.querySelectorAll(".indicator"); // אינדיקטורים

// let currentIndex = 0; // אינדקס התמונה הנוכחית

// const updateCarousel = () => {
//     // חישוב ההזזה לפי האינדקס הנוכחי
//     const offset = -currentIndex * 300; // 300 הוא רוחב התמונה
//     carousel.style.transform = `translateX(${offset}px)`;

//     // עדכון האינדיקטורים
//     indicators.forEach((indicator, index) => {
//         indicator.classList.toggle("active", index === currentIndex);
//     });
// };

// // מאזין ללחיצה על כפתור הבא
// nextBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % images.length; // מעביר לתמונה הבאה
//     updateCarousel(); // מעדכן את הקרוסלה
// });

// // מאזין ללחיצה על כפתור הקודם
// prevBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length; // מעביר לתמונה הקודמת
//     updateCarousel(); // מעדכן את הקרוסלה
// });

// // קריאה ראשונית לעדכון הקרוסלה
// updateCarousel();
