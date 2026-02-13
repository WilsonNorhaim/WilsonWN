// Простой поиск по тегам (можно добавить на страницы)
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    window.location.href = search-results.html?tag=$:{encodeURIComponent(query)};
                }
            }
        });
    }
});