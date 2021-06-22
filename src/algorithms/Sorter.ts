import { Sortable } from "../types/Sortable";

export class Sorter {
  constructor(public collection: Sortable) {}

  bubbleSort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.isGreaterThan(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
