app.service('GameManager', function(CharactersService){
	var traitCost =2;
	var _computerChoice;
	var _game = {
		characters: CharactersService.getCharacters(),
		propertyList: CharactersService.getPropertyList(),
	};
	
	this.newGame = function(){
		setRandomChoice();
		reset();
		return _game;
	}
	
	this.checkGuess = function (character) {
        //THIS ALLOWS YOU TO CHECK EACH CHARACTER INDIVIDUALLY
        //NO MODIFICATION NEEDED HERE
		if(gameOver()){ return }
		if(character === _computerChoice){
			_game.victory = true;
		}else{
			character.possible = false;
		}
		_game.guesses++;
	}
	
	this.checkProperty = function(prop){
		if(gameOver()){ return }
		var hasProp = false;
		var found = false;
        
        if(_game.guesses + traitCost >10){
            _game.message = 'You do not have enough guess credits left to eliminate that trait.'
            return;
        /**  CAN GUESS
         * Check if the traitCost is greater than remaning guesses
         * totalGuesses = 10; guesses starts at 0 and should be >incremented< for each guess
         * the traitCost starts at 2 and goes up by one for each propertyCheck
         * Dont forget to add the traitCost to the _game.guesses
         * setting _game.message will provide the user with feedback
         */
        } else {
            _game.guesses += traitCost;
            traitCost ++;
            prop.used = true;
        } //end of if statement --^
        
        /**  _COMPUTERCHOICE has TRAIT
         * _computerChocie.traits === [String, String]
         * check if _computerChoice.traits has the selected prop.name if so set hasProp = true;
         * also set prop.used = true to disable the same trait check
         *///here is this snippet --v
        for(var i=0; i< _computerChoice.traits.length; i++){
        if(_computerChoice.traits[i] === prop){
            hasProp = true;
        }
        }
        
        // v--from here to the end of the function still needs to be rethought/redone ..............
         _game.characters.forEach(function(character){
			character.traits.forEach(function(trait){
				_game.propertyList[trait]===prop;
			})
		});
        /** EACH CHARACTER HAS TRAIT
         * now check each _game.characters individually
         * if the character.traits has prop.name set 
         * found = true
         * after checking the traits
         *  
         * if hasProp && !found 
         * character.possible = false
         * 
         * What else would cause a character.possible to === false?
         * 
         */
	}
	
	function reset(){ //DONE!!
    _game.guesses =0;
    traitCost =2;
    
        /**
         * Reset all of the values on _game
         * each character on _game.characters should set to 
         * character.possible = true
         * //v-- loop one
         */
        for(var i=0; i<_game.characters.length; i++){
            _game.characters[i].possible =true;
        }
        /*
         * all of the traits in  _game.propertyList <--- its an {}
         * should be set to 
         * _game.propertyList[trait].used = false
         *///v-- loop two
        _game.characters.forEach(function(character){
			character.traits.forEach(function(trait){
				_game.propertyList[trait].used = false;
			})
		});
	}
	
	function gameOver() {
		/**
         * make sure the guesses are less than 10 
         * return true if the game should be over
         * if the game.victory 
         * set _game.computerChoice = _computerChoice
         * return true
         */
        if(_game.guesses <= 10){
            return false;
        } else if(amazing-logic-here){
            
        }
	}
	
	function setRandomChoice(){ //not sure if done correctly yet
        /**
         * This function should get a random index between 0 - _game.characters.length
         * then set _computerChoice to the object at the randI index
         */
        var whoPick = Math.floor(Math.random() * _game.characters.length);
        _computerChoice = _game.characters[whoPick];
	}
	
})