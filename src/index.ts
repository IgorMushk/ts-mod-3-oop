//import {Pilot} from './interface/1'
// import {Pilot} from './interface/2'
import {Boeing} from './interface/Boeing'
import {Terrorist} from './interface/3'


// // test interface/1.ts
// console.log('---- interface/1.ts')
// const pilot = new Pilot('Anthony', 32);

// pilot.greet('The captain of the ship greets you');
// pilot.flyMessage();


// // test interface/2.ts
// console.log('---- interface/2.ts')
// const pilot = new Pilot('Anthony', 32);

// pilot.greet('The captain of the ship greets you');
// pilot.flyMessage();
// pilot.setAutopilot();


// // test interface/Boeing.ts
// console.log('---- interface/Boeing.ts')
// const boeing = new Boeing();
// const pilot = new Pilot('Anthony', 32);

// // The captain greets the passengers on the gangway.
// pilot.greet('The captain of the ship greets you');

// // Takes the place of the pilot..
// boeing.sitInPlane(pilot);

// // We start the engines.
// boeing.startEngine();

// //+ interface/2.ts
// pilot.setAutopilot();


// test interface/3.ts
console.log('---- interface/3.ts')
const boeing = new Boeing();
const pilot = new Terrorist();

// The captain greets the passengers on the gangway.
pilot.bluff('You have captured this plane!');

// Takes the place of the pilot..
boeing.sitInPlane(pilot);

// We start the engines.
boeing.startEngine();
