$(document).ready(function() {
	$('.dropdown-toggle').click(menuClickHandler);
	$(window).scroll(windowScrollHandler);	
	$('#btn-post').click(buttonClickHandler);
	$('.status-box').keyup(statusBoxKeyupHandler);
	writePosts();
	//Cookies.remove('posts');
})

	//Menu
var menuClickHandler = function (){
	$('.dropdown-menu').slideToggle();
}
	
	
	//Back to top
var offset = 200;
var duration = 400;
var windowScrollHandler = function (){
	if ($(this).scrollTop() > offset) {
		$('#arrow-up').fadeIn(duration);
	} else {
		$('#arrow-up').fadeOut(duration);
		}
}
	
    
	//Post
function addPost(post){
	var posts = Cookies.getJSON('posts');
	if (posts == null) {
		posts = [];
	}
	if (posts.length == 3) {
		posts.splice(0, 1);
	} 
	posts.push(post);
	Cookies.set('posts', posts);
}
	
function writePosts() {
	var posts = Cookies.getJSON('posts');
	if (posts == null) {
		posts = [];
	}
	$('.posts').empty();
	for ( var i = 0 ; i < posts.length; i++) {
		$('<li>').text(posts[i]).prependTo('.posts');
	}
}


var buttonClickHandler = function(){
	var post = $('.status-box').val();
	addPost(post);
	writePosts();
	$('.status-box').val('');
	$('#counter').text('100');
	$('#btn-post').attr('disabled', true);
}

var statusBoxKeyupHandler = function () {
	var postLength = $(this).val().length;
	var charactersLeft = 100 - postLength;
	$('#counter').text(charactersLeft);
	if (charactersLeft <= 0) {
		$('#btn-post').attr('disabled', true);
	} else if (charactersLeft == 100) {
		$('#btn-post').attr('disabled', true);
	} else {
		$('#btn-post').removeAttr('disabled');
	}
}
	
$('#btn-post').attr('disabled', true);
	