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
    let elements = this._elements;
    let sortedIndices = indices.slice().sort((a, b) => a - b);
    let sortedElements = sortedIndices
      .map(idx => elements[idx])
      .sort(this._comparator);
    for (let i = 0; i < sortedIndices.length; i++) {
      elements[sortedIndices[i]] = sortedElements[i];
    }
  }

  setComparator(compareFunction) {
    this._comparator = compareFunction;
  }
}

module.exports = Sorter;
