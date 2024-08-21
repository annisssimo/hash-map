class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.8) {
    this.buckets = new Array(initialCapacity).fill(null);
    this.size = 0;
    this.loadFactor = loadFactor;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.buckets[index].push([key, value]);
    this.size++;
  }

  toString() {
    let result = '';
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        result += `Bucket ${i}: ${JSON.stringify(this.buckets[i])}\n`;
      }
    }
    return result || 'HashMap is empty';
  }
}

export default HashMap;
