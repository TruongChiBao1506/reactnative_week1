// Coding Challenge #3
function createImage(imgPath) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = imgPath;
  
      img.onload = () => {
        const imagesContainer = document.querySelector('.images');
        imagesContainer.appendChild(img);
        resolve(img);
      };
  
      img.onerror = () => {
        reject(`Error loading image: ${imgPath}`);
      };
    });
  }
  let currentImage;
  const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
// Your tasks:
// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time 
// using async/await (only the part where the promise is consumed, reuse the 
// 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one 
// you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab
async function loadNPause() {
    let img = await createImage('./img/mountain.jpg');
    await wait(2);
    img.style.display = 'none';
    console.log(img);

    img = await createImage('./img/haha.png');
    await wait(2);
    img.style.display = 'none';
    console.log(img);
}
// loadNPause();

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 
// 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the 
// 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array �
// 5. Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function
async function loadAll(imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs); 
        const imgEl = await Promise.all(imgs);
        console.log(imgEl);
        imgEl.forEach(img => img.classList.add('img-' + (imgEl.indexOf(img)+1))); 
    } catch (error) {
        console.error(error);
    }   
}
let imgArr = ['./img/img-1.jpg','./img/img-2.jpg','./img/img-3.jpg'];
loadAll(imgArr);
