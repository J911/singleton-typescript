import RandomClass from './random-class'
import RandomSingletonClass from './random-singleton-class'

const random1 = new RandomClass();
const random2 = new RandomClass();

const random3 = new RandomSingletonClass();
const random4 = new RandomSingletonClass();

console.log('not singleton instance 1:', random1.value);
console.log('not singleton instance 2:', random2.value);
console.log('random1.value === random2.value:', random1.value === random2.value)

console.log('singleton instance 3:', random3.value);
console.log('singleton instance 4:', random4.value);
console.log('random3.value === random4.value:', random3.value === random4.value)

