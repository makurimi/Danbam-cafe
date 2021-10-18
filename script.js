function animeSlider(sliderImages, currentImage){
    sliderImages.animate({
        left: currentImage === 1 ? 0 : `-${(currentImage - 1)*100}%`
    }, 1000, "swing", () => {
    })
}

let currentImage = 1;
setInterval(() => {
    const sliderImages = $('.slider-image')
    if(currentImage === sliderImages.length) {
        currentImage = 1;
    } else {
        currentImage++;
    }
    //JSON -> JavaScript object notation
    sliderImages.animate({
        left: currentImage === 1 ? 0 :  `-=${100}%`
    }, 1000, "linear", () => { 
        console.log("Animation finished")
    })
        console.log("Interval")
    }, 5500)

$("#previous").on("click", () => {
    const sliderImages = $('.slider-image')
    if(currentImage === 1) {
        currentImage = sliderImages.length;
    } else {
        currentImage--;
    }
    animeSlider(sliderImages, currentImage)
})

$("#next").on("click", () => {
const sliderImages = $('.slider-image')
    if(currentImage === sliderImages.length) {
        currentImage = 1;
    } else {
        currentImage++;
    }
    animeSlider(sliderImages, currentImage)
})