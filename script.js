// Получаем элемент с id "counter"
const counterElement = document.getElementById("counter");

// Инициализируем переменную count
let count = 0;

// Функция для обновления значения счетчика на странице
function updateCounter() {
    counterElement.textContent = count;
}

// Функция для увеличения значения счетчика
function incrementCounter() {
    count++;
    updateCounter();
}

// Функция для уменьшения значения счетчика
function decrementCounter() {
    count--;
    updateCounter();
}

// Добавляем обработчик клика на кнопку "+"
document.getElementById("plus-btn").addEventListener("click", incrementCounter);

// Добавляем обработчик клика на кнопку "-"
document.getElementById("minus-btn").addEventListener("click", decrementCounter);

// Добавляем обработчик клика на "hw-1" в хедере
document.getElementById("hw1").addEventListener("click", function() {
    alert("Вы кликнули на hw-1 в хедере");
});

// Получаем элемент с id "homework-list"
const homeworkList = document.getElementById("homework-list");

// Функция для обработки клика на элементе homework
function handleClickOnHomework() {
    alert("Вы кликнули на элемент homework");
}

// Получаем все элементы с классом "homework"
const homeworkItems = document.querySelectorAll(".homework");

// Добавляем обработчик клика для каждого элемента homework
homeworkItems.forEach(function(item) {
    item.addEventListener("click", handleClickOnHomework);
});






// Получаем элементы кнопки и выпадающего списка
const hw1Button = document.getElementById('hw1');
const collapse1 = document.getElementById('collapse-1');

// Устанавливаем флаг для отслеживания состояния
let isCollapsed = true;

// Добавляем обработчик события при клике на кнопку
hw1Button.addEventListener('click', () => {
    // Переключаем состояние
    isCollapsed = !isCollapsed;

    // Управляем классами и анимацией
    if (isCollapsed) {
        collapse1.style.maxHeight = '0';
        collapse1.style.opacity = '0';
        // Удаляем класс "open" сразу после анимации закрытия
        collapse1.classList.remove('open');
    } else {
        collapse1.classList.add('open');
        // Добавляем класс "open" и изменяем стили сразу после анимации открытия
        collapse1.style.maxHeight = '1000px';
        collapse1.style.opacity = '1';
    }
});








