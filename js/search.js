// Поиск по тегам для RPWiki
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    // ИСПРАВЛЕНО: добавлены кавычки и правильный синтаксис
                    window.location.href = 'search-results.html?tag=' + encodeURIComponent(query);
                }
            }
        });
    }
});