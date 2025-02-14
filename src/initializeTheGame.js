export function initializeGame() {
    return new Promise((resolve) => {
      console.log("Initializing game...");
      setTimeout(() => {
        console.log("Game initialized successfully!");
        resolve();
      }, 1000);
    });
  }
  
  initializeGame().then(() => console.log("Test complete: initializeGame"));