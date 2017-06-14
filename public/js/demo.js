
// Fold & Unfold left menu
function foldNav(){
  $('#leftnav').toggleClass('folded');
  $('#leftnav').toggleClass('unfolded');
  $('#content').toggleClass('folded');
  $('#content').toggleClass('unfolded');
}


$( document ).ready(function() {

    // Hide Top menu layers
    $('#notice-layer').hide();
    $('#globe-layer').hide();
    $('#account-layer').hide();

    // Toggle Top menu layers
    $('.toptab.notice').click(function(){
        $(this).toggleClass("active");
        $('#notice-layer').toggle();
    });
    $('.toptab.globe').click(function(){
        $(this).toggleClass("active");
        $('#globe-layer').toggle();
    });
    $('.toptab.account').click(function(){
        $(this).toggleClass("active");
        $('#account-layer').toggle();
    });

    // Left Nav: Remove active class
    $('#leftnav > li').each(function(){
      $(this).removeClass('active');
      var thisPage = $('#content').attr('name');
      if ($(this).hasClass(thisPage)) {
        $(this).addClass('active');
      }
    });




});