const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
  
    } else {
      console.log('You have Typed a wrong input. please check the spelling and try again.')
    }
  };
  
  //computer Choice
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';   
  
    }
  } 
  
  //determining winner;
  const determineWinner = (userChoice, ComputerChoice) =>{
    if (userChoice === ComputerChoice){
      return 'The game is a tie. :)'
    };
  
    if (userChoice === 'rock'){
      if (ComputerChoice === 'paper'){
        return 'The computer won!'
      } else {
        return 'You won!';
      }
    };
    if (userChoice === 'paper'){
      if (ComputerChoice === 'scissors'){
        return 'The computer won!'
      } else {
        return 'You won!';
      }
    };
    if (userChoice === 'scissors'){
      if (ComputerChoice === 'rock'){
        return 'The computer won!'
      } else {
        return 'You won!';
      }
    };
  }
  
  const playGame = () => {
    userChoice = getUserChoice('scissors');
    ComputerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + ComputerChoice);
    console.log(determineWinner(userChoice,ComputerChoice)); 
  }
  
  
  playGame();
  
  
  
  
  
  
  