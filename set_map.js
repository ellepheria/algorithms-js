// Типы данных словарь и множество в JavaScript

const map = new Map()
const objKey = {id:5}

map.set("name", "max")
map.set(objKey, "123123")

console.log(map.get(objKey))


const set = new Set();

set.add(5);
set.add(5);
set.add(5);
set.add(4);
set.add(3);
set.add(5);
set.add(5);
set.add(5);

console.log(set)