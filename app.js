console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++)
{
    if (i % 2 == 1)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log(i, 'FIZZBUZZ');
    }
    else if (i % 3 == 0)
    {
        console.log(i, 'FIZZ');
    }
    else if (i % 5 == 0)
    {
        console.log(i, 'BUZZ');
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
// Exercise 1 rewritten as while and do/while loops
let a = 1;
while (a <= 100)
{
    if (a % 2 == 1)
    {
        console.log(a);
    }
    a++;
}

let b = 1;
do {
    if (b % 2 == 1)
    {
        console.log(b);
    }
    b++;
} while (b <= 100);

// Exercise 2 rewritten as while and do/while loops
let c = 1;
while (c <= 100)
{
    if (c % 3 == 0 && c % 5 == 0)
    {
        console.log(c, 'FIZZBUZZ');
    }
    else if (c % 3 == 0)
    {
        console.log(c, 'FIZZ');
    }
    else if (c % 5 == 0)
    {
        console.log(c, 'BUZZ');
    }
    c++;
}

let d = 1;
do {
    if (d % 3 == 0 && d % 5 == 0)
    {
        console.log(d, 'FIZZBUZZ');
    }
    else if (d % 3 == 0)
    {
        console.log(d, 'FIZZ');
    }
    else if (d % 5 == 0)
    {
        console.log(d, 'BUZZ');
    }
    d++;
} while (d <= 100);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let e = 0; e <= n; e++)
{
    if (e == value)
    {
        console.log(e, 'Found value!');
        break;
    }
    else if (e == n)
    {
        console.log('Did not find value.')
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let num = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let f = start; f <= n; f++)
{
    if (f % fizzDivisor == 0 && f % buzzDivisor == 0)
    {
        console.log(f, 'FIZZBUZZ');
    }
    else if (f % fizzDivisor == 0)
    {
        console.log(f, 'FIZZ');
    }
    else if (f % buzzDivisor == 0)
    {
        console.log(f, 'BUZZ')
    }
}