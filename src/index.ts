import { Sorter } from "./algorithms/Sorter";
import { CharactersCollection } from "./utils/CharacetersCollection";
import { NumbersCollection } from "./utils/NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.bubbleSort();
console.log(numberSorter.collection);

const charactersCollection = new CharactersCollection("Xaaa");
const characterSorter = new Sorter(charactersCollection);
characterSorter.bubbleSort();
console.log(characterSorter.collection);
