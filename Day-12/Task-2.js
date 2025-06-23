tweet = prompt("Enter a tweet");
used = tweet.length;
remaining = 140 - used;

console.log(`You have used ${used} | Remaining ${remaining} Char`);
