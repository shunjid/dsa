import { Sortable } from "../types/Sortable";

export class NumbersCollection implements Sortable {
  constructor(public data: Array<number>) {}

  public get length(): number {
    return this.data.length;
  }

  public isGreaterThan(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    const rightHand = this.data[rightIndex];
    [this.data[leftIndex], this.data[rightIndex]] = [rightHand, leftHand];
  }
}
