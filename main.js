
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 3;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1)
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
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











number = 0
function prevTop() {
    if (number < 5) {
        number += 1
    } else {
        number = 0
    }
    slideView()
}

function slideView(){
    let slidesTop = document.querySelectorAll(".top")
    console.log(slidesTop)
    
    slidesTop.item(number).style.display = "block"
}

for (let item of slidesTop){
    item.style.display="none"
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