export default class RandomSingletonClass {
  
  private static instance = new RandomSingletonClass();
  
  private random: number;
  
  get value(): number {
    return this.random;
  }
  
  constructor () {
    if (!!RandomSingletonClass.instance) return RandomSingletonClass.instance;
    this.random = Math.random();
  }
}