import { IPerson, IPilot } from './type';

class Pilot implements IPerson, IPilot {
  constructor(public name: string, public age: number) {
    if (this.age < 28) {
      throw new Error('Pilot too young');
    }
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }

  flyMessage(): void {
    console.log('The plane gained altitude, everyone have a pleasant flight!');
  }
}

// const pilot = new Pilot('Anthony', 32);

// pilot.greet('The captain of the ship greets you');
// pilot.flyMessage();

export {Pilot};
