$(document).ready(function randomquote(){
	var quotes = ["pumpkin",
				"cat",
				"ugly stepsister",
				"the doppler effect",
				"grandma",
				"the Flash",
				"a ghost",
				"hipster",
				"something about art",
				"an ass",
				"ghostbuster",
				"the internet",
				"andy warhol",
				"the universe",
				"captain underpants",
				"the NSA",
				"jony ive",
				"cardboard box",
				"john boehner crying",
				"heisenberg",
				"wrecking ball",
				"binder full of women",
				"skanky pizza",
				"chipotle burrito",
				"something original",
				"crayon",
				"a sexy environmentalist",
				"don't be catwoman",
				"a robot",
				"a human",
				"a tiny dinosaur",
				"slutty pumpkin",
				"some sort of mouse",
				"a neon color",
				"black and white stripes",
				"hanging chad",
				"a muggle",
				"kanye west",
				"pumpkin spice latte",
				"a lichtenstein girl",
				"three hole punch Jim",
				"walt jabsco",
				"a muffin"
			
		

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


