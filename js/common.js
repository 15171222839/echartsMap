$(function() {
  //全屏铺满
  var ratioX = $(window).width()/1920;
  var ratioY = $(window).height()/1080;
  $("body").css({
      transform: "scale("+ratioX+","+ratioY+")",
      transformOrigin: "left top",
      backgroundSize: "100% 100%",
  });
 
});
//调整浏览器窗口全屏铺满
$(window, document).resize(function() {
  var ratioX = $(window).width()/1920;
  var ratioY = $(window).height()/1080;
  $("body").css({
      transform: "scale("+ratioX+","+ratioY+")",
      transformOrigin: "left top",
      backgroundSize: "100% 100%",
  });
});