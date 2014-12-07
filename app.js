$(document).ready(function () {
	$("#home").load('home.html');
	$("#info").load('info.html');
	$("#Member").load('Member.html');
	$("#Contact").load('Contact.html');

	$('#Member-button').click(function(){

		$('#home').hide();
		$('#info').hide();
		$('#Member').show();
		$('#Contact').hide();
	});

	$('#home-button').click(function(){

		$('#home').show();
		$('#info').hide();
		$('#Member').hide();
		$('#Contact').hide();
	});

	$('#info-button').click(function(){
		$('#home').hide();
		$('#info').show();
		$('#Member').hide();
		$('#Contact').hide();
	});

	$('#MontanaBids-button').click(function(){
		$('#home').hide();
		$('#info').hide();
		$('#Member').hide();
		$('#Contact').hide();
	});

	$('#PrivatePR-button').click(function(){
		$('#home').hide();
		$('#info').hide();
		$('#Member').hide();
		$('#Contact').hide();
	});

	$('#Contact-button').click(function(){
		$('#home').hide();
		$('#info').hide();
		$('#Member').hide();
		$('#Contact').show();
	});

	$(".menu").mouseover(function() {
		$(this).attr('id', 'hover');
	});

		$(".menu").mouseleave(function() {
		$(this).removeAttr('id', 'hover');
	});

});

