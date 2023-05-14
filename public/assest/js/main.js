function toggleClass(IdName, className){
  var element = document.querySelector(IdName);
  element.classList.toggle(className);
}
function addClass(IdName, className){
  var element = document.querySelector(IdName);
  element.classList.add(className);
}
function removeClass(IdName, className){
  var element = document.querySelector(IdName);
  element.classList.remove(className);
}

// function commercialBox(IdName, className){
//   const boxes = document.getElementsByClassName('commercialBox');
//   for (const box of boxes) {
//     box.classList.add('hideBox');
//   }
//   var element = document.querySelector(IdName);
//   element.classList.remove(className);
// }

// $(document).ready(function(){
//   var boxWidth = $(".commercialBox").width();
//   $(".commercialBox").animate({width: 0});
//   $(".clickBox").click(function(){
//     $(".commercialBox").animate({
//       width: 0
//     });
//   });
//   $("#box3").click(function(){
//     $(".commercialBox").animate({
//       width: boxWidth
//     });
//   });
// });

// Animation
AOS.init({
  duration: 800,
  easing: 'ease-in-out-back'
});


$(document).ready(function(){
	
	$('ul.tabs .sublink').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs .sublink').removeClass('current');
		$('.tabcontent').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  $('ul.tabcontent .underlink').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabcontent .underlink').removeClass('current');
    $('.tabcontent2').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

});