function initHeader() {
  const $burgerMenu = $(".burger-menu");
  const $popupOverlay = $("#popupOverlay");
  const $popupOverlayContainer = $(".side-popup-container");
  const $closePopup = $("#closePopup");

  // Thêm icon mũi tên nếu chưa có
  $(".menu-item-has-children").each(function () {
    const $a = $(this).children("a");
    if ($a.siblings(".arrow-icon").length === 0) {
      $a.after('<span class="arrow-icon"></span>');
    }
  });

  // Click toggle submenu chỉ khi màn hình nhỏ hơn 1200px
  function bindMobileMenuToggle() {
    $(".menu-item-has-children > .arrow-icon")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $li = $(this).closest(".menu-item-has-children");
        const $submenu = $li.children(".sub-menu");

        if ($li.hasClass("open")) {
          $submenu.stop(true, true).slideUp(300, function () {
            $submenu.removeAttr("style");
          });
          $li.removeClass("open");
        } else {
          $submenu.stop(true, true).slideDown(300, function () {
            $submenu.css("display", "block");
          });
          $li.addClass("open");
        }
      });
  }

  // Reset tất cả inline style của sub-menu
  function resetSubmenuDisplay() {
    $(".menu-item-has-children").each(function () {
      $(this).removeClass("open").children(".sub-menu").removeAttr("style");
    });
  }

  // Xử lý mở popup menu
  function openPopup() {
    $popupOverlay.addClass("active");
    bindMobileMenuToggle(); // Gắn lại toggle khi mở popup
  }

  function closePopup() {
    $popupOverlay.removeClass("active");
    resetSubmenuDisplay();
  }

  $burgerMenu.on("click", openPopup);
  $closePopup.on("click", closePopup);
  $popupOverlayContainer.on("click", function (e) {
    if (e.target === this) {
      closePopup();
    }
  });

  // Khi resize window → gỡ bỏ click-toggle nếu là desktop
  $(window).on("resize", function () {
    if (window.innerWidth >= 1200) {
      resetSubmenuDisplay();
      $(".menu-item-has-children").off("click.mobileToggle");
    }
  });
}

$(document).ready(initHeader);
