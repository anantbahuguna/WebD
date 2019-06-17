//DOM

function handleClick(btnVal)
{
	var result = document.getElementById('result');
	if(isNaN(btnVal))
	{
		if(btnVal === '=')
		{
			result.innerText=eval(result.innerText)
		}
		else if(btnVal === 'C')
		{
			result.innerText='';
		}
		else if(result.innerText.slice(result.innerText.length-1) !== btnVal)
		{
			result.innerText+=btnVal;
		}
	}
	else if(result.innerText === '0')
	{
		result.innerText = btnVal;
	}
	else
	{
		result.innerText+=btnVal;
	}
}