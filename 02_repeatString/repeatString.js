const repeatString = function (string, num) {
    let holder = '';
    if (num < 0) {
        return ("ERROR")
    }

    else if (num > 0) {
        for (let i = 0; i < num; i++) {
            holder += string;
        }
    }
    return holder;
};

// Do not edit below this line
module.exports = repeatString;
