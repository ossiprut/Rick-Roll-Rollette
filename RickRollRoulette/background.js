chrome.tabs.onCreated.addListener((tab) => {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
  
    // Check if the random number is 1 (1/6 chance)
    if (randomNumber === 1) {
      chrome.tabs.update(tab.id, { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
    }
  });