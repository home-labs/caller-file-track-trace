import { CallerFileTrackTrace } from '../index.js';


export class Test3 {

    private myselfIdentifier: string;

    constructor() {
        this.myselfIdentifier = this.constructor.name;

        const fileTracker: CallerFileTrackTrace = new CallerFileTrackTrace();

        console.log(`\nWho called ${this.myselfIdentifier}: `, fileTracker.getFileCallerURL());
    }

}
