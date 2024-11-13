document.addEventListener('DOMContentLoaded', function() {
    const check = document.getElementById('check');
    const menuList = document.querySelector('.menu-list');

    check.addEventListener('change', function() {
        if (check.checked) {
            menuList.style.display = 'flex';
        } else {
            menuList.style.display = 'none';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            menuList.style.display = 'flex';
            check.checked = false;
        } else {
            menuList.style.display = 'none';
        }
    });
});
