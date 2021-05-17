import { ModuleTracker } from '../index.js';


export class TestCallerModule {

    constructor() {
        const fileTracker: ModuleTracker = new ModuleTracker();

        console.log(`When called TestCallerModule: `, fileTracker.getAbsolutePathOfFileCaller());
    }

}
