# HashMap Implementation in JavaScript

## Overview

This project is a custom implementation of a HashMap data structure in JavaScript. A HashMap, also known as a hash table, is a data structure that allows you to store key-value pairs, with efficient insertion, deletion, and lookup operations. The core idea behind a HashMap is to use a hash function to map keys to indices in an array, known as buckets, where the values are stored.

## Features

- **Custom Hash Function**: A hash function that converts string keys into hash codes which are then used to determine the index in the buckets array.
- **Collision Handling**: Resolves collisions using separate chaining (storing multiple key-value pairs in the same bucket).
- **Dynamic Resizing**: Automatically resizes the buckets array when the load factor exceeds a certain threshold to maintain efficiency.
- **Basic HashMap Operations**:
  - `set(key, value)`: Inserts or updates a key-value pair in the HashMap.
  - `get(key)`: Retrieves the value associated with a given key.
  - `has(key)`: Checks if a given key exists in the HashMap.
  - `remove(key)`: Removes the key-value pair associated with a given key.
  - `length()`: Returns the number of key-value pairs currently stored in the HashMap.
  - `clear()`: Clears all key-value pairs from the HashMap.
  - `keys()`: Returns an array of all keys in the HashMap.
  - `values()`: Returns an array of all values in the HashMap.
  - `entries()`: Returns an array of all key-value pairs in the HashMap.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/annisssimo/hash-map.git
   cd linked-list
   ```

2. **Initialize Node.js:**

   Ensure that Node.js is installed on your machine. Initialize the project with:

   ```bash
   npm init -y
   ```

3. **Enable ES6 Modules:**

   Modify your `package.json` to use ES6 modules by adding:

   ```json
   {
     "type": "module"
   }
   ```

## Usage

### Example

Here’s a quick example of how to use the `HashMap` class:

```javascript
const hashMap = new HashMap();

// Adding key-value pairs
hashMap.set('apple', 'red');
hashMap.set('banana', 'yellow');
hashMap.set('carrot', 'orange');

// Retrieving a value
console.log(hashMap.get('apple')); // Output: red

// Checking if a key exists
console.log(hashMap.has('banana')); // Output: true

// Removing a key-value pair
hashMap.remove('carrot');

// Getting the length of the HashMap
console.log(hashMap.length()); // Output: 2

// Getting all keys
console.log(hashMap.keys()); // Output: ['apple', 'banana']

// Getting all values
console.log(hashMap.values()); // Output: ['red', 'yellow']

// Getting all entries
console.log(hashMap.entries()); // Output: [['apple', 'red'], ['banana', 'yellow']]

// Clearing the HashMap
hashMap.clear();
console.log(hashMap.length()); // Output: 0
```

### Testing

After populating the HashMap with multiple key-value pairs, you can test its functionality by overwriting existing keys, retrieving values, and removing keys. This implementation handles collisions and dynamically resizes the internal bucket array to ensure efficient operations even as the data grows.

## Acknowledgments

- This project was inspired by the need to understand and implement core data structures from scratch.
- Special thanks to the community for providing valuable feedback and suggestions.