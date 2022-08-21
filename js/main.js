
$(function () {

  function localStrg() {
    if (localStorage.getItem('language')) {
      $("#transformation").attr("href", localStorage.getItem('language'));
      if (localStorage.getItem('language') == 'css/main-rtl.css') {
        $(".lang-eng span").text('ENGLISH');
      } else {
        $('.lang-eng span').text('عربي');
      }
    }
  }
  localStrg();
  $(".lang-eng").on('click', function () {
    if (localStorage.getItem('language') == 'css/main.css') {
      localStorage.setItem('language', 'css/main-rtl.css')
      localStrg();
    } else {
      localStorage.setItem('language', 'css/main.css')
      localStrg();
    }
  })

  $(".menu").on("click", function () {
    $("#menu-bar").slideDown();
  })
  $(".close-tag svg").on("click", function () {
    $("#menu-bar").slideUp();
  });


  /* Start select2 */
  if ($(".js-example-placeholder-single").length) {
    $(".js-example-placeholder-single").select2({
      placeholder: "الدولة",
      allowClear: false,
      minimumResultsForSearch: -1,
    });
  }
  /* end select2 */
  /* start checkPass */

  $("#change-pass").submit(function (e) {
    if ($("#new-pass").val() !== $("#con-new-pass").val()) {
      $('.check-pass').show();
      e.preventDefault();
    } else {
      $('.check-pass').hide();
    }
  });
  $("#con-new-pass").keydown(function () {
    if ($(this).length < 8) {
      $('.check-pass').hide();
    }
  });
  /* end checkPass */

  /* Start toggle img collappse */
  $(".signal img , .title-qu p").on("click", function () {
    console.log();
    $(this).parent().find('img').toggle();
  })
  /* end toggle img collappse */
})


let main = document.querySelector('section .main'),
  section = document.querySelector('section');
if (main) {
  let resizeObserver = new ResizeObserver(() => {
    section.style.height = main.clientHeight - 139 + 'px';
  });

  resizeObserver.observe(main);
}