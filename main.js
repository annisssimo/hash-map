import HashMap from './hashMap.js';

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.toString());

console.log(test.get('frog'));

console.log(test.has('lion'));
console.log(test.has('abra'));

console.log(test.remove('frog'));
console.log(test.toString());
