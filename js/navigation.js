// navigation.js - универсальная навигация для Telegram Mini Apps
document.addEventListener('DOMContentLoaded', function() {
    // Обработка всех кнопок "Назад"
    const backButtons = document.querySelectorAll('.back-button');
    
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Пытаемся вернуться назад
            if (document.referrer && document.referrer.includes(window.location.host)) {
                // Если есть referrer с нашего сайта
                history.back();
            } else {
                // Если нет истории - определяем уровень вложенности
                const path = window.location.pathname;
                const pathParts = path.split('/').filter(p => p);
                
                if (path.includes('articles/')) {
                    // Мы в статье - идем в категорию
                    const category = document.querySelector('.breadcrumbs a:nth-child(3)')?.getAttribute('href') || '../index.html';
                    window.location.href = category;
                } else if (path.includes('category-')) {
                    // Мы в категории - идем на главную
                    window.location.href = 'index.html';
                } else {
                    // Мы на главной - ничего не делаем или показываем сообщение
                    alert('Вы на главной странице');
                }
            }
        });
    });
    
    // Добавляем поддержку свайпа назад (для мобильных)
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        // Свайп справа налево (назад)
        if (touchEndX < touchStartX - 50) {
            // Свайп назад
            if (document.querySelector('.back-button')) {
                document.querySelector('.back-button').click();
            }
        }
    }
});