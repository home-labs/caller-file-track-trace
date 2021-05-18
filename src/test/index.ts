import { ModuleTrackTrace } from '../index.js';

import { Test2 } from './test2.js';


export class Test1 {

    private myselfIdentifier: string;

    constructor() {
        this.myselfIdentifier = this.constructor.name;

        const fileTracker: ModuleTrackTrace = new ModuleTrackTrace();

        console.log(`\nWho called ${this.myselfIdentifier}: `, fileTracker.getFileCallerURL());

        new Test2();
    }

}

new Test1();
