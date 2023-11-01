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
    console.log('The plane gained altitude, everyone had a pleasant flight!');
  }

  setAutopilot(): void {
    console.log('Autopilot is on.');
  }
}

export {Pilot};