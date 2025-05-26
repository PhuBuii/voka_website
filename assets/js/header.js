function initHeader() {
  const $burgerMenu = $(".burger-menu");
  const $popupOverlay = $("#popupOverlay");
  const $closePopup = $("#closePopup");
  const $searchBox = $("#searchBox");
  const $searchBtn = $("#searchBtn");
  const $searchInput = $("#searchInput");

  // Thêm icon mũi tên nếu chưa có
  $(".menu-item-has-children").each(function () {
    const $a = $(this).children("a");
    if ($a.siblings(".arrow-icon").length === 0) {
      $a.after('<span class="arrow-icon"></span>');
    }
  });

  // Click toggle submenu chỉ khi màn hình nhỏ hơn 1024px
  function bindMobileMenuToggle() {
    $(".menu-item-has-children")
      .off("click.mobileToggle")
      .on("click.mobileToggle", function (e) {
        if (window.innerWidth >= 1024) return;

        const $target = $(e.target);
        if ($target.is("a")) return;

        e.preventDefault();
        e.stopPropagation();

        const $li = $(this);
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
  $popupOverlay.on("click", function (e) {
    if (e.target === this) {
      closePopup();
    }
  });

  // Search Box logic
  $searchBtn.on("click", function () {
    const keyword = $.trim($searchInput.val());
    if ($searchBox.hasClass("active")) {
      if (keyword !== "") {
        console.log("Đang tìm kiếm:", keyword);
        alert("Đang gửi data search");
      } else {
        $searchInput.focus();
      }
    } else {
      $searchBox.addClass("active");
      $searchInput.focus();
    }
  });

  $searchInput.on("blur", function () {
    if ($.trim($(this).val()) === "") {
      $searchBox.removeClass("active");
    }
  });

  // Khi resize window → gỡ bỏ click-toggle nếu là desktop
  $(window).on("resize", function () {
    if (window.innerWidth >= 1024) {
      resetSubmenuDisplay();
      $(".menu-item-has-children").off("click.mobileToggle");
    }
  });
}

$(document).ready(initHeader);
