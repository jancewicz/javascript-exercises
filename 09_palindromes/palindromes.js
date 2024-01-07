function isAlNum(char) {
    return /^[a-zA-Z0-9]+$/.test(char);
}

const palindromes = function (word) {
    lowerCaseWord = word.toLowerCase().split("");

    let tmpTrash = '';
    let newWord = '';

    for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
        if (isAlNum(lowerCaseWord[i])) {
            newWord += lowerCaseWord[i];
        } else if (isAlNum(lowerCaseWord[i] == false)) {
            tmpTrash += lowerCaseWord[i];
            lowerCaseWord.splice(i, 1);

        }
    }
    finalString = lowerCaseWord.join("");

    if (finalString === newWord) {
        return true;
    } else if (word != newWord) {

        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;





