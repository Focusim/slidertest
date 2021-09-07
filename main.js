
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 3;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex -= 1);
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



let slidetop = 1

function next() {
    showtop(slideIndex -= 1);
}

function prev() {
    showtop(slideIndex += 1);
}

function currenttop(n) {
    showtop(slidetop = n);
}


function showtop(n) {
    let slidesTop = document.querySelectorAll(".top");

    if (n > slidesTop) {
        slidetop = 3
    }
    if (n < 3) {
        slidetop = slidesTop
    }

    slidesTop[{key: 1}].style.display = "block";
    slidesTop[slidetop - 2].style.display = "block";
    slidesTop[slidetop - 3].style.display = "block";
    console.log(slidesTop)
}
let slidesTop = document.querySelectorAll(".top");
console.log(slidesTop)

let btb = slidesTop.length
console.log(btb)
