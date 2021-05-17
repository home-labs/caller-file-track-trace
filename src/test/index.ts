import { TestCallerModule } from './test-caller-module.js';
import { ModuleTracker } from '../index.js';


export class Test {

    constructor() {

    }

    whoCalledMe() {
        const fileTracker: ModuleTracker = new ModuleTracker();

        console.log(`When called me: `, fileTracker.getAbsolutePathOfFileCaller());
    }

    whoCalledTest() {
        new TestCallerModule();
    }

}

const testCallerModule: Test = new Test();
testCallerModule.whoCalledTest();
// testCallerModule.whoCalledMe();
