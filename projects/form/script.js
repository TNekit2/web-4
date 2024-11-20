document.getElementById('submitBtn').addEventListener('click', function() {
    // Получаем значения из input'ов
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Если введено хотя бы одно поле, формируем приветствие
    if (firstName || lastName) {
        document.getElementById('greeting').textContent = `Здравствуйте, ${firstName} ${lastName}!`;
    } else {
        document.getElementById('greeting').textContent = "Пожалуйста, введите имя или фамилию.";
    }
});
