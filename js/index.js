$(document).ready(function(){

  //모바일용 메뉴버튼_________
  $(".mo_view").css({"right":"-100%"}); //처음위치
  $(".close").hide();

  $(".mo_menu_btn").click(function(){
    $(".mo_view").stop(true, true).animate({"right":"0%"});
    $(".mo_menu_btn").hide();
    $(".close").show();
  });

  $(".close").click(function(){
    $(".mo_view").stop(true, true).animate({"right":"-100%"});
    $(".close").hide();
    $(".mo_menu_btn").show();
  });
});