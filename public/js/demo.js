
// Fold & Unfold left menu
function foldNav(){
  $('#leftnav').toggleClass('folded');
  $('#leftnav').toggleClass('unfolded');
  $('#content').toggleClass('folded');
  $('#content').toggleClass('unfolded');
}

function openModal(id){
  $(id).show();
}
function closeModal(){
  $('.modal').hide()
}

// Fold & Unfold Vertical
function toggleFold(id){
  $(id).toggleClass('folded');
  $(id).toggleClass('unfolded');
}

$( document ).ready(function() {

  $('.modal').hide();
  $('.bar-hover-layer').hide();

  // Open Top menu layers
  $('.toptab.notice').click(function(){
    if($('#notice-layer').hasClass('show') == false){
      $('.right-wrapper .pop-layer').removeClass('show');
      $('#notice-layer').addClass('show');
    } else {
      $('#notice-layer').removeClass('show');
    }
  });
  $('.toptab.globe').click(function(){
    if($('#globe-layer').hasClass('show') == false){
      $('.right-wrapper .pop-layer').removeClass('show');
      $('#globe-layer').addClass('show');
    } else {
      $('#globe-layer').removeClass('show');
    }
  });
  $('.toptab.account').click(function(){
    if($('#account-layer').hasClass('show') == false){
      $('.right-wrapper .pop-layer').removeClass('show');
      $('#account-layer').addClass('show');
    } else {
      $('#account-layer').removeClass('show');
    }
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

  // Room-chart Bar Hover layers
  $('.room-line .bar').mouseover(function(){
    var offset = $(this).offset()
    $('.bar-hover-layer').offset({
      top: offset.top + 50,
      left: offset.left + 50
    });
    $('.bar-hover-layer').show();
  });
  $('.room-line .bar').mouseout(function(){
    $('.bar-hover-layer').offset({
      top: 0,
      left: 0
    });
    $('.bar-hover-layer').hide();
  });

});
