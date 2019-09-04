// Alice wrote a sequence of words in CamelCase as a string of letters, , having the following properties:
//
// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given S , print the number of words in S on a new line.

function camelcase(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let character = s.charAt(i)
        if (character >= "A" && character <= "Z") {
            count += 1
        }
    }
return count + 1

}
