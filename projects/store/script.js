// Получаем элементы для ФИО
let userSurname = document.querySelector('[name="surname"]');
let userName = document.querySelector('[name="name"]');

// Получаем элементы для товаров и их количества
let goodsElements = document.querySelectorAll('[name="goods"]');
let countElements = document.querySelectorAll(".colvo");
let btn = document.querySelector(".btn");
let resultElem = document.querySelector(".sum");

// Список товаров и их количества
let Goods = ["expresso", "americano", "latte", "capuchino", "chocolate_muffin", "blueberry_muffin", "apple_tart"];
let kolvoGoods = [0, 0, 0, 0, 0, 0, 0];
let sumGoods = [0, 0, 0, 0, 0, 0, 0];

// Функция для расчета итоговой суммы
function countSum() {
    let totalSum = 0;
    for (let i = 0; i < goodsElements.length; i++) {
        if (goodsElements[i].checked) {
            totalSum += sumGoods[i];
        }
    }
    return totalSum;
}

// Обновление количества и стоимости товаров при изменении
goodsElements.forEach((elem, index) => {
    elem.addEventListener("change", function () {
        if (elem.checked) {
            countElements[index].value = "1";  // Задаем значение 1 при выборе товара
            kolvoGoods[index] = parseInt(countElements[index].value);
            sumGoods[index] = parseInt(elem.value) * kolvoGoods[index];
        } else {
            countElements[index].value = "0";  // Обнуляем количество при снятии галочки
            kolvoGoods[index] = 0;
            sumGoods[index] = 0;
        }
        resultElem.innerHTML = countSum() + " р.";
    });
});

// Обновление итоговой суммы при изменении количества
countElements.forEach((product, index) => {
    product.addEventListener("change", function () {
        if (goodsElements[index].checked && parseInt(product.value) > 0) {
            kolvoGoods[index] = parseInt(product.value);
            sumGoods[index] = parseInt(goodsElements[index].value) * kolvoGoods[index];
        } else {
            product.value = "0";
            kolvoGoods[index] = 0;
            sumGoods[index] = 0;
        }
        resultElem.innerHTML = countSum() + " р.";
    });
});

// Обработка нажатия на кнопку "Оформить заказ"
btn.addEventListener("click", function () {
    // Проверяем, что поля Имя и Фамилия заполнены
    if (!userName.value || !userSurname.value) {
        alert("Пожалуйста, введите ваше имя и фамилию.");
    } else {
        // Отображаем итоговый заказ в алерте
        alert(`Заказчик: ${userName.value} ${userSurname.value}\nИтого: ${resultElem.textContent}`);
    }
});
