
// Fold & Unfold left menu
function foldNav(){
  $('#leftnav').toggleClass('folded');
  $('#leftnav').toggleClass('unfolded');
  $('#content').toggleClass('folded');
  $('#content').toggleClass('unfolded');
}

function openModal(id){
  console.log(id)
   $(id).show();
}
function closeModal(){
  console.log('close')
  $('.modal').hide()
}

$( document ).ready(function() {

    // Hide Top menu layers
    $('#notice-layer').hide();
    $('#globe-layer').hide();
    $('#account-layer').hide();

    // Hide Modals
    // $('.modal').hide();

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

    // Left Nav Active
    $('#leftnav > li').each(function(){
      var thisPage = $('#content').attr('name');
      if ($(this).hasClass(thisPage)) {
        $(this).addClass('active');
      }
    });

    // Sub-menu Active
    $('#sub-menu li').each(function(){
      var thisPage = $('#content').attr('page');
      if ($(this).hasClass(thisPage)) {
        $(this).addClass('active');
      }
    });

    // Topbar active
    $('#topbar .toptab').each(function(){
      var thisPage = $('#content').attr('name');
      if ($(this).hasClass(thisPage)) {
        $(this).addClass('active');
      }
    });

});
