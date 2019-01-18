$(document).ready(function() {
	
	// var restricted = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	// var rand;
	// do {
	// 	rand = Math.floor(Math.random() * 10);
	// } while ($.inArray(rand, restricted) > -1);
	// console.log(rand);

	var happy = {
		word: 'happy',
		correct: 'content',
		incorrect1: 'angry',
		incorrect2: 'frustrated',
		incorrect3: 'sad',
	}

	var sad = {
		word: 'sad',
		correct: 'depressed',
		incorrect1: 'angry',
		incorrect2: 'frustrated',
		incorrect3: 'happy'
	}

	var angry = {
		word: 'angry',
		correct: 'annoyed',
		incorrect1: 'happy',
		incorrect2: 'sad',
		incorrect3: 'michevious'
	}

	var fantastic = {
		word: 'fantastic',
		correct: 'great',
		incorrect1: 'happy',
		incorrect2: 'sad',
		incorrect3: 'michevious'
	}
	var great = {
		word: 'great',
		correct: 'good',
		incorrect1: 'happy',
		incorrect2: 'sad',
		incorrect3: 'michevious'
	}

	var myWordsArray = [happy, sad, angry, great, fantastic];

	var randomObject = function(array) {
		return myWordsArray[Math.floor(Math.random()*myWordsArray.length)];
	};

  	var randomIncorrect = function (obj) {
    		var keys = Object.keys(obj)
    		var keys = keys.splice(2);
    		return obj[keys[keys.length * Math.random() << 0]];
    };

    var removeObject = function(array, obj) {
    	var index = array.indexOf(obj);
    	if (index > -1) {
    		array.splice(index, 1);
    	};
    	return array;
    };

    var randomNumber = function() {
    	return Math.floor(Math.random() * 2) + 1  
    }

    var currentObject = randomObject(myWordsArray);
	var currentCorrect = currentObject.correct;
	var currentIncorrect = randomIncorrect(currentObject);
	var currentRandomNumber = randomNumber();
	var currentWord = currentObject.word;
	removeObject(myWordsArray, currentObject);
	
	$('.word').text(currentWord);
	if (currentRandomNumber === 1) {
		$('.play-button-1').text(currentCorrect);
		$('.play-button-2').text(currentIncorrect);
	} else {
		$('.play-button-2').text(currentCorrect);
		$('.play-button-1').text(currentIncorrect);
	}

	$('.home-module button').on('click', function() {
		$('.home-module').hide();
		$('.play-module').show();
		$('.instructions').hide();
		$('.title').hide();
	})




	$('.play-button-1').on('click',function() {
			console.log(myWordsArray);

		console.log(currentObject);
		if ($('.play-button-1').text() !== currentCorrect) {
			console.log('lose');
			$('.play-module').hide();
			$('.lose').show();
		} else if (myWordsArray.length === 0) {
			console.log('you win!');
			$('.congrats').show();
			$('.play-module').hide();

		} else {
			console.log('keep-going');
			currentObject = randomObject(myWordsArray);
			currentCorrect = currentObject.correct;
			currentIncorrect= randomIncorrect(currentObject);
			currentRandomNumber = randomNumber();
			currentWord = currentObject.word;
			$('.word').text(currentWord);
			if (currentRandomNumber === 1) {
				$('.play-button-1').text(currentCorrect);
				$('.play-button-2').text(currentIncorrect);
			} else {
				$('.play-button-2').text(currentCorrect);
				$('.play-button-1').text(currentIncorrect);
			};
			removeObject(myWordsArray, currentObject);


		

		}
	})



	$('.play-button-2').on('click',function() {
		console.log(myWordsArray);

		console.log(currentObject);
		if ($('.play-button-2').text() !== currentCorrect) {
			console.log('lose');
			$('.play-module').hide();
			$('.lose').show();
		} else if (myWordsArray.length === 0) {
			console.log('you won!');
			$('.congrats').show();
			$('.play-module').hide();
		} else {
			console.log('keep-going');
			currentObject = randomObject(myWordsArray);
			currentCorrect = currentObject.correct;
			currentIncorrect= randomIncorrect(currentObject);
			currentRandomNumber = randomNumber();
			currentWord = currentObject.word;
			$('.word').text(currentWord);
			if (currentRandomNumber === 1) {
				$('.play-button-1').text(currentCorrect);
				$('.play-button-2').text(currentIncorrect);
			} else {
				$('.play-button-2').text(currentCorrect);
				$('.play-button-1').text(currentIncorrect);
			};
			removeObject(myWordsArray, currentObject);

		

		
	

		};
	});









	








	







       
 






});