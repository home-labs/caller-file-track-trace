import { ModuleTrackTrace } from '../index.js';


export class Test3 {

    private myselfIdentifier: string;

    constructor() {
        this.myselfIdentifier = this.constructor.name;

        const fileTracker: ModuleTrackTrace = new ModuleTrackTrace();

        console.log(`\nWho called ${this.myselfIdentifier}: `, fileTracker.getFileCallerURL());
    }

}
