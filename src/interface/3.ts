import { IPerson, IPilot } from './type';
import { Boeing } from './Boeing';

class Terrorist implements IPilot {
  bluff(phrase: string): void {
    console.log(phrase);
  }

  flyMessage(): void {
    console.log("Our demands are 9 million, otherwise we will kill all the hostages.");
  }
}

// const boeing = new Boeing();
// const pilot = new Terrorist();

// // The captain greets the passengers on the gangway.
// pilot.bluff('You have captured this plane!');

// // Takes the place of the pilot..
// boeing.sitInPlane(pilot);

// // We start the engines.
// boeing.startEngine();

export {Terrorist};
