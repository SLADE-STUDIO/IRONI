let bgColors = [];
let currentColorIndex = 0;
let images = [];
let mainImage;

function preload() {
  mainImage = loadImage('0.jpg'); // השתמש בשם הקובץ המדויק שהעלית
  images.push(loadImage('1.jpg')); // השתמש בשם הקובץ המדויק שהעלית
  images.push(loadImage('2.jpg')); // השתמש בשם הקובץ המדויק שהעלית
  images.push(loadImage('3.jpg')); // השתמש בשם הקובץ המדויק שהעלית
}

function setup() {
  createCanvas(windowWidth, windowHeight); // הגדרה של קנבס שמתאים לגובה חלון הדפדפן
  bgColors = [
    color(255, 0, 0),   // אדום
    color(255, 165, 0), // כתום
    color(255, 255, 0), // צהוב
    color(0, 128, 0),   // ירוק
    color(0, 0, 255),   // כחול
    color(75, 0, 130),  // אינדיגו
    color(238, 130, 238) // סגול
  ];
}

function draw() {
  // פסים צבעוניים של דגל הגאווה
  let stripeHeight = height / bgColors.length;
  for (let i = 0; i < bgColors.length; i++) {
    fill(bgColors[(currentColorIndex + i) % bgColors.length]);
    rect(0, i * stripeHeight, width, stripeHeight);
  }

  // כותרת למעלה
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255);
  text("חודש גאווה שמח!", width / 2, 50);
  
  textSize(20);
  text("בואו לחגוג איתנו את עצרת הגאווה המרכזית למען עתיד טוב יותר", width / 2, 100);

  // תמונה ראשית עם רווח מתחתיה
  imageMode(CENTER);
  image(mainImage, width / 2, 250, mainImage.width / 4, mainImage.height / 4);

  // טקסט מתחת לתמונה הראשית עם רווח
  textSize(24);
  fill(255);
  text("הגאווה משחררת", width / 2, 400);

  // תמונות נוספות עם רווחים ביניהן
  let imgY = 550;
  let imgX = width / 2 - (images.length - 1) * 150;
  for (let i = 0; i < images.length; i++) {
    image(images[i], imgX + i * 300, imgY, images[i].width / 4, images[i].height / 4);
  }

  // ציטוט בתחתית
  textSize(24);
  textAlign(CENTER);
  fill(255);
  textStyle(BOLD);
  text("The photographer is not simply the person who records the past but the one who invents it", width / 2, imgY + 150);
}

function mousePressed() {
  currentColorIndex = (currentColorIndex + 1) % bgColors.length;
}
