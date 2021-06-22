export interface Sortable {
  length: number;
  isGreaterThan(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
