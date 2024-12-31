const puppeteer = require("puppeteer");

(async () => {
  try {
    // פתח דפדפן חדש
    const browser = await puppeteer.launch({ headless: true }); // headless=true אומר שלא ייפתח דפדפן גרפי
    const page = await browser.newPage();

    // גש לאתר ישירות
    await page.goto("https://www.rami-levy.co.il/", {
      waitUntil: "domcontentloaded",
    });

    // שלוף את התוכן של הדף
    const content = await page.content();

    // הדפס את תוכן ה-HTML של הדף
    console.log(content);

    // שלוף נתונים על מוצרים מה-DOM של הדף
    const productData = await page.evaluate(() => {
      const products = [];
      const productElements = document.querySelectorAll(".product"); // כאן תוודא שה-selector מתאים לאתר

      productElements.forEach((product) => {
        const name = product.querySelector(".product-name")?.textContent.trim(); // כאן תוודא שה-selector מתאים לאתר
        const price = product
          .querySelector(".product-price")
          ?.textContent.trim(); // כאן תוודא שה-selector מתאים לאתר
        const imageUrl = product
          .querySelector("img") // תוודא שה-selector מתאים לתמונה באתר
          ?.src.trim(); // שלוף את ה-src של התמונה

        if (name && price && imageUrl) {
          products.push({ name, price, imageUrl });
        }
      });

      return products;
    });

    // הדפס את המוצרים שנמצאו
    if (productData.length > 0) {
      console.log("הנה המוצרים שנמצא:");
      productData.forEach((product) => {
        console.log(
          `שם מוצר: ${product.name}, מחיר: ${product.price}, כתובת תמונה: ${product.imageUrl}`
        );
      });
    } else {
      console.log("לא נמצאו מוצרים");
    }

    // סגור את הדפדפן
    await browser.close();
  } catch (error) {
    console.error("אירעה שגיאה:", error);
  }
})();
