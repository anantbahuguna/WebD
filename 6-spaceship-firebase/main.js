





var key = {
	left: 37,
	up: 38,
	right: 39,
	down: 40
}

$(document).ready(function(){

	var database = firebase.database();

	var direction = {
		left: false,
		right: false,
		up: false,
		down: false
	}

	var spaceship = $('#spaceship')

	spaceship.css({

		position: 'absolute',
		left: 100,
		top: 100,
		height: 100,
		width: 100
	})

	database.ref('spaceship-position').on('value',function(snapshot){
		spaceship.css(snapshot.val())
	})
	database.ref('spaceship-direction').on('value',function(snapshot){
		direction = snapshot.val()
	})

	

	

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


		database.ref('spaceship-direction').set(direction);
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

		database.ref('spaceship-direction').set(direction);
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
		database.ref('spaceship-position').set({ position: spaceship.css("position"),
		left: spaceship.css("left"),
		top: spaceship.css("top"),
		height: spaceship.css("height"),
		width: spaceship.css("width")}
		)
		
	}


	setInterval(move, 10)

})