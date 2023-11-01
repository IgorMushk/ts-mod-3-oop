import { IPerson, IPilot } from './type';
import {Pilot} from './2';


abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error('No pilot in cabin');
    }
    // We warm up jet turbines..
    console.log('Starting the turbines');

    this.pilot.flyMessage();
    return true;
  }
}

// const boeing = new Boeing();
// const pilot = new Pilot('Anthony', 32);

// // The captain greets the passengers on the gangway.
// pilot.greet('The captain of the ship greets you');

// // Takes the place of the pilot..
// boeing.sitInPlane(pilot);

// // We start the engines.
// boeing.startEngine();

export { Boeing };
