$(document).ready(function () {
	$("#home").load('home.html');
	$("#info").load('info.html');
	$("#Member").load('Member.html');
	$("#Contact").load('Contact.html');

	$('.home-button').click(function(){
		$('#home').show();
		$('#info').hide();
		$('#Member').hide();
		$('#Contact').hide();
		$("#nav-mobile.expanded").removeClass("expanded").slideUp(250);
	});

	$('.info-button').click(function(){
		$('#home').hide();
		$('#info').show();
		$('#Member').hide();
		$('#Contact').hide();
		$("#nav-mobile.expanded").removeClass("expanded").slideUp(250);
	});

	$('.Member-button').click(function(){
		$('#home').hide();
		$('#info').hide();
		$('#Member').show();
		$('#Contact').hide();
		$("#nav-mobile.expanded").removeClass("expanded").slideUp(250);
	});

	$('.Contact-button').click(function(){
		$('#home').hide();
		$('#info').hide();
		$('#Member').hide();
		$('#Contact').show();
		$("#nav-mobile.expanded").removeClass("expanded").slideUp(250);
	});

    $("#nav-trigger").click(function(){
        if ($("#nav-mobile").hasClass("expanded")) {
            $("#nav-mobile.expanded").removeClass("expanded").slideUp(250);
        } else {
            $("#nav-mobile").addClass("expanded").slideDown(250);
        }
    });
});

