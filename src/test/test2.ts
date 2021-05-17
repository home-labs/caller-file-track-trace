import { ModuleTrackTrace } from '../index.js';

import { Test3 } from './test3.js';


export class Test2 {

    private myselfIdentifier: string;

    constructor() {
        this.myselfIdentifier = this.constructor.name;

        const fileTracker: ModuleTrackTrace = new ModuleTrackTrace();

        console.log(`\nWho called ${this.myselfIdentifier}: `, fileTracker.getAbsolutePathOfFileCaller());

        new Test3();
    }

}
