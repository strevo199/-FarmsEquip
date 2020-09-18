class Data{
  constructor(){
    
  }
}

// UI lass/
class UI{
  showAllImage(){
  



}}
 const dataChage = [
  {img:'tractor-5477681__340.jpg',detail:'We Sell tractor',link:'https://tractor.com'},
  {img:'farmer-880567__340.webp',detail:'Lorem ipsum ',link:'https://lorem.com'},
  {img:'fendt-3627024__340.webp',detail:'Sdolor sit amet ',link:'https://serrrc.com'},
  {img:'tractor-2652573__340.jpg',detail:'laboriosam pariatur.',link:'https://actor.com'},
  {img:'old-car-3226193__340.jpg',detail:' earum ex tempora ',link:'https://photo.com'},
  {img:'fram-vietnam-4506225__340.jpg',detail:'nisi amet natus',link:'https://tractor.com'},
  {img:'istockphoto-155138828-170667a.jpg',detail:' quidem suscipit. Ipsum',link:'https://foloow.com'},
  {img:'plough-240057__340.jpg',detail:' esse error veritatis obcaecatir',link:'https://tractor.com'},
  {img:'olive-oil-610366__340.webp',detail:'Ab minima assumenda iusto hic quia, dolores,',link:'https://tractor.com'},
]
let time  = 3000;
let i = 0;

function chageSlide() { 
  document.sliderIMg.src = `./image/${dataChage[i].img}`;
  document.querySelector('.detail-sub').textContent = dataChage[i].detail;
  document.querySelector('.detail-link').href = dataChage[i].link;

  if (i < dataChage.length - 1) {
    i++
  } else {
    i = 0
  }
  setTimeout('chageSlide()',time)
}
window.onload = chageSlide 



// function showcaseImg() {
//   // instanitaite Data;

  
//   const ui = new UI()

//   //showAllIMage
//   ui.showAllImage()
// }

// showcaseImg()