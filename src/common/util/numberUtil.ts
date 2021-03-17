export const getUnitLevel = (num: number) => {
    const numStr = num.toString();
    const digits = numStr.substr(1, numStr.length-1).length;
    return Math.floor(digits/3);
}

export const getUnitName = (num: number) => {
    const unitLevel = getUnitLevel(num);
    if (unitLevel === 1) return 'RB';
    else if (unitLevel === 2) return 'Jt';
    return '';
}

export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}