$(document).ready(function () {
  $("#em").focus(function () {
    $(this).css("background-color", "lime");
  });

  $("#pwd").blur(function () {
    $(this).css("background-color", "lime");
  });

  $("#tx").change(function () {
    $(this).css("background-color", "lime");
  });
  // jQuery(".images").click(function () {
  //   var contentPanelId = jQuery(this).attr("id");
  //   console.log(contentPanelId);
  //   $(contentPanelId).not(contentPanelId).hide();
  //   let a = $(this).hide();
  //   console.log(a);
  // });

  // let clicks = 0;
  // $(".images").click(function () {
  //   var contentPanelId = jQuery(this).attr("id");
  //   console.log(contentPanelId);
  //   (clicks % 2 == 0)?($("div:not('#" + jQuery(this).attr("id") + "')").hide()):($(".images").show()) ;
  //   ++clicks;
  // });


  let clicks = 0;
  $(".images").click(function () {
    clicks % 2 == 0? $("div:not('#" + jQuery(this).attr("id") + "')").hide(): $(".images").show();
    ++clicks;
  });
});
