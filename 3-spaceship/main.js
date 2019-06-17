
var key = {
	left: 37,
	up: 38,
	right: 39,
	down: 40
}

$(document).ready(function(){

	var spaceship = $('#spaceship')

	spaceship.css({

		position: 'absolute',
		left: 100,
		top: 100,
		height: 100,
		width: 100
	})

	var direction = {
		left: false,
		right: false,
		up: false,
		down: false
	}

	$(document).on('keydown', function(e){
		if(e.keyCode === key.left){
			direction.left = true;
		}
		if(e.keyCode === key.right){
			direction.right =true;
		}
		if(e.keyCode === key.up){
			direction.up = true;
		}
		if(e.keyCode === key.down){
			direction.down =true;
		}
	})
	$(document).on('keyup', function(e){
		if(e.keyCode === key.left){
			direction.left = false;
		}
		if(e.keyCode === key.right){
			direction.right =false;
		}
		if(e.keyCode === key.up){
			direction.up = false;
		}
		if(e.keyCode === key.down){
			direction.down =false;
		}
	})

	var speed =5;

	function move()
	{
		if(direction.left)
		{
			spaceship.css({
				left: spaceship.position().left - speed
			})
		}
		if(direction.right)
		{
			spaceship.css({
				left: spaceship.position().left + speed
			})
		}
		if(direction.up)
		{
			spaceship.css({
				top: spaceship.position().top - speed
			})
		}
		if(direction.down)
		{
			spaceship.css({
				top: spaceship.position().top + speed
			})
		}
	}


	setInterval(move, 10)

})