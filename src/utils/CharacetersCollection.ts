import { Sortable } from "../types/Sortable";

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  public get length(): number {
    return this.data.length;
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");
    const leftHand = characters[leftIndex];
    const rightHand = characters[rightIndex];
    [characters[leftIndex], characters[rightIndex]] = [rightHand, leftHand];

    this.data = characters.join("");
  }
}
