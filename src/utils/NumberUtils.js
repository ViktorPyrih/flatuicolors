const ZERO_CODE = 48;
const NINE_CODE = 57;
const SIXTEEN_BASE = 15;

function convertTo10Base(hash) {
    const hashUpperCase = hash.toUpperCase();
    return convertToNumber(hashUpperCase.charCodeAt(0)) * SIXTEEN_BASE + convertToNumber(hashUpperCase.charCodeAt(1));
}

function convertToNumber(charPoint) {
    if (charPoint <= NINE_CODE) {
        return charPoint - ZERO_CODE;
    }

    return charPoint - 55;
}

export {convertTo10Base};
