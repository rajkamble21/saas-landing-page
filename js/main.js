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






document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');

        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.classList.replace('fa-minus', 'fa-plus');
        } else {
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.display = 'none';
            });
            document.querySelectorAll('.accordion-header i').forEach(item => {
                item.classList.replace('fa-minus', 'fa-plus');
            });

            content.style.display = 'block';
            icon.classList.replace('fa-plus', 'fa-minus');
        }
    });
});

