let images = [
  './images/img1.jpg',
  './images/img2.jpg',
  './images/img3.jpg',
  './images/img4.jpg',
]

const body = document.querySelector('.root')

const leftDiv = document.createElement('div')
const carouselImage = document.createElement('img')
const rightDiv = document.createElement('div')

leftDiv.textContent = "<"
rightDiv.textContent = ">"

let imageNumber = 0

carouselImage.src = images[imageNumber]

const carouselIterator = () => {
  if(imageNumber == images.length-1){
    imageNumber = 0;
  }else{
    imageNumber++;
  }
  carouselImage.src = images[imageNumber]
}

const carouselIteratorReverse = () => {
  if(imageNumber == 0){
    imageNumber = images.length-1
  }else{
    imageNumber--
  }
  carouselImage.src = images[imageNumber]
}


rightDiv.addEventListener('click', () => {
  carouselIterator()
})

leftDiv.addEventListener('click', () => {
  carouselIteratorReverse()
})

function run() {
    return new Promise((resolve, reject) => {
        try {
            carouselIterator()
            return resolve()
        } catch (e) {
            return reject(e)
        }
    })
    .then(setTimeout(() => run(), 5000));
}
run();


body.appendChild(leftDiv)
body.appendChild(carouselImage)
body.appendChild(rightDiv)
