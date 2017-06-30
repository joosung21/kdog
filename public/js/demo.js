
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

function closeContextMenu(){
  $('.context-menu').hide()
}

function openRwindow(){
  $('#r-window').show();
}

// Fold & Unfold Vertical
function toggleFold(id){
  $(id).toggleClass('folded');
  $(id).toggleClass('unfolded');
}

$( document ).ready(function() {

  $('.modal').hide();
  $('.context-menu').hide();
  $('.hover-layer').hide();

  $('.modal .layover').click(function(){
    $('.modal').hide();
  });

  $('.context-menu .layover').click(function(){
    $('.context-menu').hide();
  });

  $('.openContextMenu').click(function(){
    var offset = $(this).offset()
    $('.context-menu ul').css({
      top: offset.top + 15,
      left: offset.left + 60
    });
    $('.context-menu').show()
  });

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

  // Tab-menu Active
  $('.tab-menu .tab').each(function(){
    var thisPage = $('#content').attr('tab');
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

  // Room-chart Empty Rec Hover Action
  $('.room-line .rec.empty').mouseover(function(){
    var offset = $(this).offset()
    $('#rec-hover-layer').css({
      top: offset.top + 50,
      left: offset.left + 50
    });
    $('#rec-hover-layer').show();
  });
  $('.room-line .rec.empty').mouseout(function(){
    $('#rec-hover-layer').offset({
      top: 0,
      left: 0
    });
    $('#rec-hover-layer').hide();
  });

  // Room-chart Bar Hover Action
  $('.room-line .bar').mouseover(function(){
    var offset = $(this).offset()
    $('#bar-hover-layer').css({
      top: offset.top + 50,
      left: offset.left + 50
    });
    $('#bar-hover-layer').show();
  });
  $('.room-line .bar').mouseout(function(){
    $('#bar-hover-layer').offset({
      top: 0,
      left: 0
    });
    $('#bar-hover-layer').hide();
  });



});
