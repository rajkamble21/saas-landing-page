document.addEventListener('DOMContentLoaded', function () {
    const sidebarLogo = document.querySelector('.sidebar-logo');
    const nav = document.querySelector('.nav');

    sidebarLogo.addEventListener('click', function (event) {
        event.stopPropagation();
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    });

    document.addEventListener('click', function (event) {
        if (nav.style.display === 'flex' && !nav.contains(event.target)) {
            nav.style.display = 'none';
        }
    });
});
