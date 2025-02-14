//integrate all functions here
import { playerMovement } from './playerMovement.js';
import { initializeGame } from './initializeTheGame.js';
import { calculateScore } from './calcScore.js';
import { checksGameOver } from './gameResult.js';

//integrate all functions here
initializeGame();
playerMovement();
calculateScore(100);
checksGameOver();