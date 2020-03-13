"use strict";
let userName = 'Sam';
let city = 'Nairobi';
// If using back ticks, the string is called a template literal and expressions can be interpolated within them.
let punchline = 'Because it was free-range.';
let joke = `
    Q: Why did the chicken cross the road?
    A: ${punchline}
`;
console.log(joke);
