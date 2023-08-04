module.exports = function toReadable(number) {
    let arrSingle = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrDuo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrPair = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arrTriple = ['zero', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    let strokeNumber = String(number);
    let stringNumber = '';

    if (strokeNumber.length === 3) {
        for (let i = 0; i < arrTriple.length; i++) {
            if (i === +strokeNumber[0]) {
                stringNumber += arrTriple[i];
                if (+strokeNumber[1] === 0 && +strokeNumber % 100 !== 0) {
                    for (let j = 0; j < arrSingle.length; j++) {
                        if (+strokeNumber[2] === j) {
                            stringNumber += ` ${arrSingle[j]}`;
                        }
                    }
                } else if (+strokeNumber[1] === 1) {
                    for (let j = 0; j < arrDuo.length; j++) {
                        if (+strokeNumber[2] === j) {
                            stringNumber += ` ${arrDuo[j]}`;
                        }
                    }
                } else if (+strokeNumber[1] > 1) {
                    for (let k = 0; k < arrPair.length; k++) {
                        if (+strokeNumber[1] === k) {
                            stringNumber += ` ${arrPair[k]}`;
                            if (+strokeNumber[2] > 0) {
                                for (let l = 0; l < arrSingle.length; l++) {
                                    if (+strokeNumber[2] === l) {
                                        stringNumber += ` ${arrSingle[l]}`;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (strokeNumber.length === 2) {
        if (+strokeNumber % 10 === 0) {
            for (let i = 0; i < arrPair.length; i++) {
                if (+strokeNumber[0] === i) {
                    stringNumber += arrPair[i];
                }
            }
        } else if (+strokeNumber % 10 !== 0 && +strokeNumber > 20) {
            for (let i = 0; i < arrPair.length; i++) {
                if (+strokeNumber[0] === i) {
                    stringNumber += arrPair[i];
                    if (+strokeNumber[1] > 0) {
                        for (let j = 0; j < arrSingle.length; j++) {
                            if (+strokeNumber[1] === j) {
                                stringNumber += ` ${arrSingle[j]}`;
                            }
                        }
                    }
                }
            }
        } else {
            for (let i = 0; i < arrDuo.length; i++) {
                if (+strokeNumber[1] === i) {
                    stringNumber += arrDuo[i];
                }
            }
        }

    } else if (strokeNumber.length === 1) {
        for (let i = 0; i < arrSingle.length; i++) {
            if (+strokeNumber === i) {
                stringNumber += arrSingle[i];
            }
        }
    }
    return stringNumber;
}
