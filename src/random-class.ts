export default class RandomClass {
  
  public random: number;
  
  get value(): number {
    return this.random;
  }
  
  constructor () {
    this.random = Math.random();
  }
}