import Sorter from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10,3,-5,0]); 
const sorter = new Sorter(numbersCollection);

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);

// sorter.sort();
// console.log(charactersCollection.data);



const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-2);
linkedList.add(4);
linkedList.add(1);

const sorter= new Sorter(linkedList);
sorter.sort();
linkedList.print();