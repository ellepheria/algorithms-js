// Бинарный поиск

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch (array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (!found && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle -1;
        } else {
            start = middle + 1;
        }
    }

    return position;


}

console.log(binarySearch(array, 15))
console.log(count)


function recursiveBinarySearch(array, item, start, end) {
    middle = Math.floor((start + end) / 2);
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle -1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}

console.log(recursiveBinarySearch(array, 8, 0, array.length))
console.log(count)
// выдает ошибку, если нужного значения нет в массиве (получается бесконечная рекурсия)