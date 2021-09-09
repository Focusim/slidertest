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











number0 = 0
number1 = 1
number2 = 2

slideView()

//number 0
function prevTop() {
    if (number0 < 1) {
        number0 = 5
    } else if (number0 <= 5) {
        number0 -= 1
    }
    if (number1 < 1) {
        number1 = 5
    } else if (number1 <= 5) {
        number1 -= 1
    }
    if (number2 < 1) {
        number2 = 5
    } else if (number2 <= 5) {
        number2 -= 1
    }
    slideView()
    if (number0 === 5) {
        let slidesTop = document.querySelectorAll(".top")
        slidesTop.item(0).style.order = "1"
        slidesTop.item(1).style.order = "1"
        slidesTop.item(2).style.order = "1"
    }
    if (number0 === 2) {
        let slidesTop = document.querySelectorAll(".top")
        slidesTop.item(0).style.order = "unset"
        slidesTop.item(1).style.order = "unset"
        slidesTop.item(2).style.order = "unset"
    }
}

function nextTop() {
    if (number0 < 5) {
        number0 += 1
    } else {
        number0 = 0
    }
    if (number1 < 5) {
        number1 += 1
    } else {
        number1 = 0
    }
    if (number2 < 5) {
        number2 += 1
    } else {
        number2 = 0
    }
    slideView()
    if (number0 === 4) {
        let slidesTop = document.querySelectorAll(".top")
        slidesTop.item(0).style.order = "1"
        slidesTop.item(1).style.order = "1"
        slidesTop.item(2).style.order = "1"
    }
    if (number0 === 1) {
        let slidesTop = document.querySelectorAll(".top")
        slidesTop.item(0).style.order = "unset"
        slidesTop.item(1).style.order = "unset"
        slidesTop.item(2).style.order = "unset"
    }
    console.log(number0) 
}







function slideView() {
    let slidesTop = document.querySelectorAll(".top")
    console.log(slidesTop)
    for (let item of slidesTop) {
        item.style.display = "none"
    }
    slidesTop.item(number0).style.display = "block"
    slidesTop.item(number1).style.display = "block"
    slidesTop.item(number2).style.display = "block"
}

test = 10
test = test + 10
console.log(test)




















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