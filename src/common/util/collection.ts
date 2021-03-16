export const shuffle = <T>(arr: T[]) => {
    let currentIndex = arr.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        let temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}