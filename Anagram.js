
let newdict = []
	for (let word of dictionary)
	{
		if ((word.length >= 6) && (word.indexOf("-") == -1))
		{
			newdict.push(word)
		}
	}
	
	//console.log(wordIndex);

function myRand(start = 0, count = 2)
{
	return start + Math.floor(Math.random() * count)
}





 lives = 10;
 counter = 0;
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }


let originalWord


function bill(){
	let wordIndex = myRand(0, newdict.length)
    let word = newdict[wordIndex]
	originalWord = word
 	var myarray=[];
	var c = word.length
		for (var i=0;i<c;i++){
		myarray[i]=word.charAt(i);
		}

    // scramble array of characters
	for (let i = 0; i < myarray.length - 1; i++) 
	{
		let idx = myRand(i, myarray.length - i)
		if (idx != i)
		{
			let temp = myarray[i]
			myarray[i] = myarray[idx]
			myarray[idx] = temp
			
		}
	}
	
	let rebuilt = ""
	for (var i=0;i<myarray.length;i++){
	    rebuilt += myarray[i]; 
	}
	document.f1.nw.value = rebuilt
	
	
}

function bill_1(){
	let guess = document.getElementById("guess").value.toLowerCase()
	if(originalWord == guess)
	{
		alert('Words Match');
		document.getElementById('guess').value = ''
		document.getElementById('guess1').value = ''
	}
	else{
		alert('Wrong guess, try again');
		document.getElementById('guess').value = ''
		var showLives = document.getElementById("mylives");
		
		lives--;
		showLives.innerHTML = "You have " + lives + " lives left!"
		//console.log("lives are reducing: " , showLives);
	}
}







		