for (let i = 1; i < 121; i++) {

    let divisibleByFour = i % 4;
    let divisibleByTen = i % 10;

    if ((divisibleByFour === 0) && (divisibleByTen === 0))
        console.log("FizzBuzz");
    else if (divisibleByFour === 0)
        console.log("Fizz");
    else if (divisibleByTen === 0)
        console.log("Buzz");
    else
        console.log(i);
}