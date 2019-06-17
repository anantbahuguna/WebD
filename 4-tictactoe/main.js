
var players = ['X','O']
//var player_color = ['blue','green']
//var buttons = ['b1','b2','b3','b4','b5','b6','b7','b8','b9']
var i=0;
var j=0;

$(document).ready(function(){

		/*$('button').css({
					'width':'70px',
					'height':'70px',
					'font-size':'40px'
				})*/

		$('#restart').click(function(){
				i=0
				j=0
				$('button').text('+')
				$('#restart').text('Restart Game')
				/*$('button').css({
					'background-color':'',
					'color':'black',
					'width':'70px',
					'height':'70px',

				})*/
				$('#winner').text('')
		})
		
		$("button").click(function(){

			if($('#winner').text()=== '')
			{
				var result = "#" + this.id
				if($(result).text() == "+")
				{	
					/*$(result).css({
						'background-color': 'blue',
						'color': 'white'
					})*/
					$(result).text(players[i])
					i= Math.abs(i-1)
					j+=1
				}

				if($('#b1').text()===$('#b2').text() && $('#b1').text()!=="+" )
				{
					if($('#b2').text()===$('#b3').text())
						$('#winner').text('winner is '+$('#b1').text())
				}
				if($('#b1').text()===$('#b4').text() && $('#b1').text()!=="+" )
				{
					if($('#b4').text()===$('#b7').text())
						$('#winner').text('winner is '+$('#b1').text())
				}
				if($('#b1').text()===$('#b5').text() && $('#b1').text()!=="+" )
				{
					if($('#b5').text()===$('#b9').text())
						$('#winner').text('winner is '+$('#b1').text())
				}
				if($('#b4').text()===$('#b5').text() && $('#b4').text()!=="+" )
				{
					if($('#b5').text()===$('#b6').text())
						$('#winner').text('winner is '+$('#b4').text())
				}
				if($('#b7').text()===$('#b8').text() && $('#b7').text()!=="+" )
				{
					if($('#b8').text()===$('#b9').text())
						$('#winner').text('winner is '+$('#b7').text())
				}
				if($('#b2').text()===$('#b5').text() && $('#b2').text()!=="+" )
				{
					if($('#b5').text()===$('#b8').text())
						$('#winner').text('winner is '+$('#b2').text())
				}
				if($('#b3').text()===$('#b6').text() && $('#b3').text()!=="+" )
				{
					if($('#b6').text()===$('#b9').text())
						$('#winner').text('winner is '+$('#b3').text())
				}
				if($('#b3').text()===$('#b5').text() && $('#b3').text()!=="+" )
				{
					if($('#b5').text()===$('#b7').text())
						$('#winner').text('winner is '+$('#b3').text())
				}
				if(j === 9 && $('#winner').text() === '')
				{
					$('#winner').text('DRAW')
				}


			}

		})


	
})
