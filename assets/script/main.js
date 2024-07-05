// header フェードイン
const btn = $('.header__hamburger-menu');
const nav = $('#header-nav');
const change_btn = $('.hamburger-btn');

btn.on('click', () => {
    nav.toggleClass('open-menu');
    change_btn.toggleClass('change-btn');
});

