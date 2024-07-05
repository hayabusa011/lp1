// header フェードイン
const btn = $('.header__hamburger-menu');
const nav = $('#header-nav');

btn.on('click', () => {
    nav.toggleClass('open-menu');
});

