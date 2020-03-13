let userName: string = 'Sam';
let city: string = 'Nairobi';

// If using back ticks, the string is called a template literal and expressions can be interpolated within them.
let punchline: string = 'Because it was free-range.';
let joke: string = `
    Q: Why did the chicken cross the road?
    A: ${punchline}
`
console.log(joke)