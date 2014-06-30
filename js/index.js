$(document).ready(function(){
  gen();
});
function gen(){
  var $co=$('.d');
  var x;
    $co.mouseenter(function(){
    $co.removeClass('c');
    $co.css('width','17%');
    $(this).addClass('c');
    x=$(this).text();
    $(this).text("");
  });
    $co.mouseleave(function(){
      $co.css('width','20%');
      $(this).removeClass('c');
      $(this).text(x).css({'font-size':'60px','text-align':'center'});
    });
}
