//section ONE
let arr = 10000;
let btnOne = document.querySelector('.one__btn');
let outOne = document.querySelector('.one__out');

btnOne.onclick = () => {
    arr++;
    let str = arr.toString().split("").map(item => +item);
    str.shift();
    console.log(str);
    outOne.innerHTML += `${str}<br>`;
};




//section TWO
let twoImg = document.querySelector('.two__img');
let twoRange = document.querySelector('.two__range');

twoRange.value = 0;
twoRange.max = images120.length - 1;

twoImg.src = `images 120deg/` + images120[0];

twoRange.oninput = () => {
    twoImg.src = `images 120deg/` + images120[twoRange.value];
}




//section THREE
let prevDog = document.querySelector('.prev-dog');
let nextDog = document.querySelector('.next-dog');
let threeWrapper = document.querySelector('.three__slider-wrapper');
let imgDogs = document.querySelectorAll('.dog-pic');
let numPic = document.querySelector('.three__num');
let allPics = document.querySelector('.three__all');
let count = 0;
let picNumb = 1;

numPic.innerHTML = picNumb;
allPics.innerHTML = (imgDogs.length);


nextDog.addEventListener('click', () => {
    picNumb++;
    if (picNumb > imgDogs.length) {
        picNumb = 1; 
    };
numPic.innerHTML = picNumb;
   count = count + 300;
   if (count > (imgDogs.length-1)*300) {
    count = 0;
   }
   threeWrapper.style.left = -count + 'px';
});

prevDog.addEventListener('click', () => {
    picNumb--;
    if (picNumb < 1) {
        picNumb = imgDogs.length; 
    };
numPic.innerHTML = picNumb;
    count = count - 300;
    if(count < 0) {
        count = (imgDogs.length-1)*300;
    }
    threeWrapper.style.left = -count + 'px';
 });


 //section FOUR
 let picBlog = document.querySelector('.four__pics-blog');

 for (let key in imagesMarvel) {
    let imgMarv = document.createElement('img');
    imgMarv.setAttribute("data-key", key);
    imgMarv.src = "images-Marvel_heroes/" + key + ".png";
    picBlog.append(imgMarv);
 };


 picBlog.addEventListener("click", showInfo);

 function showInfo (event) {
    let key = event.target.dataset["key"];
    if (key === undefined) {
        return false;
    }
    let heroName = document.querySelector('.hero__name');
    let heroMovie = document.querySelector('.hero__movie');
    let heroUniverse = document.querySelector('.hero__universe');

    heroName.innerHTML = imagesMarvel[key]['name'];
    heroMovie.innerHTML = imagesMarvel[key]['movie'];
    heroUniverse.innerHTML = imagesMarvel[key]['universe'];
    document.querySelectorAll(".four__pics-blog img").forEach(item => item.classList.remove('border'));
    event.target.classList.add('border');
 };

 











