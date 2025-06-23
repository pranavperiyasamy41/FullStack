function lifeInWeeks(age) {
    const yearsLeft = 90 - age;
    const daysLeft = yearsLeft * 365;
    const weeksLeft = yearsLeft * 52;
    const monthsLeft = yearsLeft * 12;
    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
}

lifeInWeeks(12);
// Output: You have 28470 days, 4056 weeks, and 936 months left.
