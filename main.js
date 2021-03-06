/* Слайдер на 1+ блоков, 1 из них виден -- начало */


/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
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
    /* Обращаемся к элементам с названием класса "slider__block" */
    let slides = document.getElementsByClassName("slider__block");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}

/* Слайдер на 1+ блоков, 1 из них виден -- конец */







/*Слайдер на 4+ блоков, 3 из них видны -- начало*/

/*Создаём 3 переменных c "индексами"*/
number0 = 0
number1 = 1
number2 = 2

/*Вызываем функцию 'видимости'*/
slideView()

/*Пересчитываем блоки слайдера ".top" */
let slidesTop = document.querySelectorAll(".top")

/*Считаем количество блоков, отнимаем Единицу для зацикливания перелёстывания слайдов*/
checkSlide = slidesTop.length - 1

/*Функция клика на кнопку "вперёд"*/
function nextTop() {
    /*Добавляем индекс переменным отталкиваясь от их позиций */
    if (number0 < checkSlide) {
        number0 += 1
    } else {
        number0 = 0
    }
    if (number1 < checkSlide) {
        number1 += 1
    } else {
        number1 = 0
    }
    if (number2 < checkSlide) {
        number2 += 1
    } else {
        number2 = 0
    }
    /*Задаём ордер для "правильной" номерации блоков при слайде*/
    if (number0 === 3) {
        slidesTop.item(0).style.order = "1"
        slidesTop.item(1).style.order = "1"
    }
    if (number0 === 2) {
        slidesTop.item(0).style.order = "1"
        slidesTop.item(1).style.order = "1"
    }
    /*Убираем ордер */
    if (number0 === 0) {
        slidesTop.item(0).style.order = "unset"
        slidesTop.item(1).style.order = "unset"
    }
    /*Вызываем функцию 'видимости' с изменёными индексамы */
    slideView()
}

/*Функция клика на кнопку "назад"*/
function prevTop() {
    if (number0 < 1) {
        number0 = checkSlide
        slidesTop.item(0).style.order = "1"
        slidesTop.item(1).style.order = "1"
    } else if (number0 <= checkSlide) {
        number0 -= 1
    }
    if (number0 === 2) {
        slidesTop.item(1).style.order = "unset"
    }
    if (number0 === 1) {
        slidesTop.item(0).style.order = "unset"
        slidesTop.item(1).style.order = "unset"
    }
    if (number1 < 1) {
        number1 = checkSlide
    } else if (number1 <= checkSlide) {
        number1 -= 1
    }
    if (number2 < 1) {
        number2 = checkSlide
    } else if (number2 <= checkSlide) {
        number2 -= 1
    }
    slideView()
}

/*Функция 'видимости' Блоков */
function slideView() {
    /*Пересчитываем блоки слайдера ".top" */
    let slidesTop = document.querySelectorAll(".top")
    /*Задаём всем блокам 'невидимость' */
    for (let item of slidesTop) {
        item.style.display = "none"
    }
    /*Даём видимость блокам в зависимости от индексов переменных */
    slidesTop.item(number0).style.display = "block"
    slidesTop.item(number1).style.display = "block"
    slidesTop.item(number2).style.display = "block"
}

/*Слайдер на 4+ блоков, 3 из них видны -- конец*/

/*Слайдер на 1 блок
number0 = 0
slideView()
let slidesTop = document.querySelectorAll(".top")
checkSlide = slidesTop.length - 1
function nextTop() {
    if (number0 < checkSlide) {
        number0 += 1
    } else {
        number0 = 0
    }
    slideView()
}
function prevTop() {
    if (number0 < 1) {
        number0 = checkSlide
    } else if (number0 <= checkSlide) {
        number0 -= 1
    }
    slideView()
}
function slideView() {
    let slidesTop = document.querySelectorAll(".top")
    for (let item of slidesTop) {
        item.style.display = "none"
    }
    slidesTop.item(number0).style.display = "block"
}
Слайдер на 1 блок -- end*/
















