var divIds = ['special', 'bronze', 'silver', 'gold', 'diamond'];
divIds.forEach(function (id) {
    var currentDiv = document.getElementById(id);
    currentDiv.addEventListener('click', function () {
        divIds.forEach(function (otherId) {
            if (otherId !== id) {
                document.getElementById(otherId).classList.remove('border-highlight-' + otherId);
            }
        });
        this.classList.toggle('border-highlight-' + id);
    });
});

document.body.addEventListener('click', function (event) {
    if (!divIds.some(id => document.getElementById(id).contains(event.target))) {
        divIds.forEach(function (id) {
            document.getElementById(id).classList.remove('border-highlight-' + id);
        });
    }
});