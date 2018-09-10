class Sorter {
  constructor() {
    this._elements = [];
    this._comparator = (a, b) => a - b;
  }

  add(element) {
    this._elements.push(element);
  }

  at(index) {
    return this._elements[index];
  }

  get length() {
    return this._elements.length;
  }

  toArray() {
    return this._elements.slice();
  }

  sort(indices) {
    let sortedIndices = indices.slice().sort((a, b) => a - b);
    let elements = this._elements;

    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < sortedIndices.length - 1; i++) {
        let aIndex = sortedIndices[i];
        let bIndex = sortedIndices[i + 1];
        if (this._comparator(elements[aIndex], elements[bIndex]) > 0) {
          let temp = elements[aIndex];
          elements[aIndex] = elements[bIndex];
          elements[bIndex] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }

  setComparator(compareFunction) {
    this._comparator = compareFunction;
  }
}

module.exports = Sorter;
