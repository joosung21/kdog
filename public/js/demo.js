
// Fold & Unfold left menu
function foldNav(){
  $('#leftnav').toggleClass('folded');
  $('#leftnav').toggleClass('unfolded');
  $('#content').toggleClass('folded');
  $('#content').toggleClass('unfolded');
}

function openTopSlider(){
  $('.top-slide-ui').removeClass('hidden');
  $('.top-slide-ui').addClass('show');
}
function closeTopSlider(){
  $('.top-slide-ui').removeClass('show');
  $('.top-slide-ui').addClass('hidden');
}

function switchBtnToggle(thisBtn){
  $(thisBtn).toggleClass('on');
}

function sWindowShow(){
  $('#s-window').show();
}
function sWindowSmallShow(){
  $('#s-window-small').show();
}

function toggleAssign(){
  $('.room-line.assign-ui').toggleClass('show')
  openTopSlider();
}

function showSMS(){
  $('#r-window .modal-board.main').hide();
  $('#r-window .modal-board.sms').show();
  $('.context-menu').hide()
}
function closeSMS(){
  $('#r-window .modal-board.sms').hide();
  $('#r-window .modal-board.main').show();
}

function showCard(){
  $('#r-window .modal-board.main').hide();
  $('#r-window .modal-board.card').show();
  $('.context-menu2').hide()
}
function closeCard(){
  $('#r-window .modal-board.card').hide();
  $('#r-window .modal-board.main').show();
}

function openModal(id){
  $(id).show();
}
function closeModal(){
  $('.modal').hide()
}

function closeContextMenu(){
  $('.context-menu').hide()
  $('.context-menu2').hide()
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
  $('.context-menu2').hide();
  $('.hover-layer').hide();
  $('#r-window .modal-board.sms').hide();
  $('#r-window .modal-board.card').hide();

  $('.modal .layover').click(function(){
    $('.modal').hide();
  });

  $('.context-menu .layover').click(function(){
    $('.context-menu').hide();
  });
  $('.context-menu2 .layover').click(function(){
    $('.context-menu2').hide();
  });

  $('.openContextMenu').click(function(){
    var offset = $(this).offset()
    $('.context-menu ul').css({
      top: offset.top + 25,
      left: offset.left + 60
    });
    $('.context-menu').show()
  });
  $('.openContextMenu2').click(function(){
    var offset = $(this).offset()
    $('.context-menu2 ul').css({
      top: offset.top + 25,
      left: offset.left + 60
    });
    $('.context-menu2').show()
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

  //Stock-table select
  $('.stock-table .room-line .rec').click(function(){
    $(this).toggleClass('selected');
    openTopSlider();
  });

  //Switch Button Action
  $('.btn-switch').click(function(){
    switchBtnToggle($(this));
  })

  //Room-calendar select toggle
  $('.room-calendar td').click(function(){
    $(this).toggleClass('selected');
    openTopSlider();
  })

});

// Modal esc key close
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $('.modal').hide();
  }
});
