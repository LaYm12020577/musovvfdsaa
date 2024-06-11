let currentScore = 0; // Начальное количество очков
let remainingClicks = 10000; // Оставшееся количество нажатий
const maxClicks = 10000; // Максимально возможное количество нажатий
let interval; // Переменная для хранения идентификатора интервала

function updateDisplay() {
    document.getElementById("score").innerHTML = currentScore;
    document.getElementById("clickCount").innerHTML = remainingClicks + ' / ' + maxClicks;
    
    // Показываем и скрываем сообщение "+19"
    const messageElement = document.getElementById("message");
    messageElement.style.display = "block";
    setTimeout(function() {
        messageElement.style.display = "none";
    }, 500);
}

function addClicksAutomatically() {
    if (remainingClicks + 3 <= maxClicks) {
        remainingClicks += 3; // Добавляем 3 нажатия
    } else {
        remainingClicks = maxClicks; // Устанавливаем максимальное значение, если прибавка приведет к перебору
    }
    document.getElementById("clickCount").innerHTML = remainingClicks + ' / ' + maxClicks; // Обновляем счётчик нажатий
}

// Функция для начала автоматического добавления нажатий
function startInterval() {
    if (!interval) {
        interval = setInterval(addClicksAutomatically, 1000);
    }
}

// Функция для остановки и возобновления интервала
function stopAndResumeInterval() {
    clearInterval(interval);
    interval = null;
    setTimeout(startInterval, 1000); // Возобновляем добавление через 1 секунду
}

document.getElementById("logo_tap_coin").addEventListener("click", function() {
    if (remainingClicks >= 19) {
        currentScore += 19; // Добавляем 19 очков к текущему счёту
        remainingClicks -= 19; // Уменьшаем количество оставшихся нажатий
        updateDisplay(); // Обновляем отображение счёта и нажатий
        stopAndResumeInterval(); // Останавливаем и возобновляем автоматическое добавление
    } else {
        alert('Недостаточно нажатий осталось для добавления очков.');
    }
});

startInterval(); // Начинаем автоматическое добавление нажатий при загрузке страницы