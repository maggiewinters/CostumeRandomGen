$(document).ready(function randomquote(){
	var quotes = ["pumpkin",
				"cat",
				"ugly stepsister",
				"the doppler effect",
				"the Flash",
				"a ghost",
				"hipster",
				"cardboard box",
				"wrecking ball",
				"binder full of women",
				"skanky pizza",
				"chipotle burrito",
				"crayon",
				"salt & pepper",
				"a sexy environmentalist",
				"don't be catwoman",
				"slutty pumpkin",
				"hanging chad",
				"a muggle",
				"kanye west",
				"pumpkin spice latte",
				"lady gaga"
			



	]
	quote = quotes[Math.floor(Math.random() * quotes.length)];
	$("#randomscript").text(quote); 

	function displayPhrase(text)
	{
    document.getElementById("#randomscript").replaceText = text;
	}

	$(".btn").click(function() {
		//$("#randomscript").text(quote);
		quote = quotes[Math.floor(Math.random() * quotes.length)];
		$("#randomscript").text(quote);
		console.log('test');
	});



});


