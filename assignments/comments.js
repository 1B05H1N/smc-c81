// What does the countChar function do?
//  Counts the number of characters that match the value passed as the 'ch' argument
// What is string and ch?
//  Both are countChar function arguments/params -- function name(param1, param2) {...}

function countChar(string, ch) {
    let counted = 0;

    // explain this for loop
    /* The for loop starts out with the i variable at value 0 until its length is greater than or equal to the length of
    the string argument param passed. i is then incremented by 1.

    The if statement `if (string[i] == ch)` compares the character at the index specified by i with the character passed
    in the ch argument param. `counted +=1` increments the temp/local. i variable by 1.

    The counted value is then returned.
     */

    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }

    return counted;
}

// what does the countBs function (do)?
/*  countBs has a single argument param called string and calls countChar. It passes the string argument from countBs()
as the first argument for the countChar function and the value "B" as the 2nd ar
gument.
 */
function countBs(string) {
    return countChar(string, "B");
}

// what is the output to console.log()
// 2, 4
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));