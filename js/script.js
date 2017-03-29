var main = function() {
	//Menu
	$('.dropdown-toggle').click(function() {
		$('.dropdown-menu').slideToggle();
	});
	
	//Back to top
	var offset = 200;
	var duration = 400;
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > offset) {
			$('#arrow-up').fadeIn(duration);
			} else {
			$('#arrow-up').fadeOut(duration);
			}
	});
    
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
	
	$('#btn-post').click(function() {
		var post = $('.status-box').val();
		addPost(post);
		writePosts();
		$('.status-box').val('');
		$('#counter').text('100');
		$('#btn-post').attr('disabled', true);
	});
	
	$('.status-box').keyup(function(){
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
	});
	$('#btn-post').attr('disabled', true);
	writePosts();
	//Cookies.remove('posts');
};
$(document).ready(main);