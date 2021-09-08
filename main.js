
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 3;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex -= 1)
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex += 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "slider__block", то есть к картинкам: */
    let slides = document.getElementsByClassName("slider__block");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 3
    }
    if (n < 3) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 2].style.display = "block";
    slides[slideIndex - 3].style.display = "block";
}


let slidesTop = document.querySelectorAll(".top")
console.log(slidesTop)

//let btb = slidesTop.item(1)
//slidesTop.item({
//    nextTop(){
//       for (i=0; i<6 ; i++){(i)}
//    }
//}).style.display="block"
//slidesTop.item(2).style.display="block"
//slidesTop.item(3).style.display="block"


start = 0
number = 0
topSlide()

function nextTop() {
    topSlide(function () { for (number = 0; number < 6; number++)number; }
    )
}

function topSlide() {
    start = number
    slidesTop.item(start).style.display = "block"
}

tes = 0
function prevTop() {
    for (tes = 0; tes < 6; ++tes) {
        alert(tes)
        slidesTop.item(tes).style.display="block"
    }
}




console.log()
let user = {
    name: 'Roman',
    age: '22',
    sayHi() {
        //this - текущий обьект
        alert(this.name)
    }
}
//user.sayHi();