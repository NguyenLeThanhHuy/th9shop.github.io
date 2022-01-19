// ----------img--------------
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector('.aspect-ratio-169');
let index=0;
let imgNumber = imgPosition.length;

imgPosition.forEach(function(image ,index) {
image.style.left = index*100 + "%";
})

function imgSlide () {
  index++;
  if(index>=imgNumber) {
	index=0;
  }
  console.log(index)
  imgContainer.style.left = "-" + index*100 + "%";
}

setInterval(imgSlide , 5000)