import { Sorter } from "./algorithms/Sorter";
import { NumbersCollection } from "./utils/NumbersCollection";

const numbers = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbers);
sorter.bubbleSort();
console.log(sorter.collection);
