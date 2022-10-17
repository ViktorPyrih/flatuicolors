import {convertTo10Base} from "./NumberUtils";

function rgb(colorHash) {
    const {a, b, c} = factorizeColor(colorHash);
    return `rgb(${a},${b},${c})`;
}

function rgba(colorHash) {
    const {a, b, c} = factorizeColor(colorHash);
    return `rgba(${a},${b},${c},1.0)`;
}

function factorizeColor(colorHash) {
    validateColorHash(colorHash);
    const a = convertTo10Base(colorHash.substring(0, 2));
    const b = convertTo10Base(colorHash.substring(2, 4));
    const c = convertTo10Base(colorHash.substring(4));

    return {a, b, c};
}

function validateColorHash(colorHash) {
    if (colorHash.length !== 6) {
        throw new Error("Color hash length has to be 6");
    }
}

export {rgb, rgba};
