function foldNav(){
  $('#leftnav').toggleClass('folded');
  $('#leftnav').toggleClass('unfolded');
  $('#content').toggleClass('folded');
  $('#content').toggleClass('unfolded');
}

$( document ).ready(function() {

    $('#notice-layer').hide();
    $('#globe-layer').hide();
    $('#account-layer').hide();


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

});
