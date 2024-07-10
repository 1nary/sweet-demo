// ヘッダーのドロップダウンメニューの開閉
jQuery(".js-nav-link").on("click", function (e){
    e.preventDefault();
    jQuery(this).next().slideToggle();
});

// ページトップへ戻るボタンをスクロール時に表示
const pageTop = jQuery(".js-page-top");
pageTop.hide();
jQuery(window).scroll(function() {
    if(jQuery(this).scrollTop() > 79) {
        pageTop.fadeIn(300);
    } else {
        pageTop.fadeOut(300);
    }
});
pageTop.on("click", function () {
    jQuery("html").animate({scrollTop: 0}, 500);
});

// メニュー画像拡大
jQuery(".menu-img img").on("click", function () {
    jQuery(".graydisplay").html(jQuery(this).prop('outerHTML'));
    jQuery(".graydisplay").fadeIn(200);
    jQuery(".body").toggleClass("is-fixed");
});
jQuery(".graydisplay, .graydisplay img").on("click", function () {
    jQuery(".graydisplay").fadeOut(200);
    jQuery(".body").toggleClass("is-fixed");
});