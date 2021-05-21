export class CallerFileTrackTrace {

    private stack: string[];

    private filePath: string;

    constructor() {
        const error: Error = new Error();

        this.stack = error.stack?.split('\n') as string[];

        this.filePath = '';

        this.resolveData();
    }

    getFileCallerURL(): string {
        return this.filePath;
    }

    private resolveData() {

        const data: string = this.stack[3];

        const filePathPattern: RegExp = new RegExp(`(file:\/{2}.+[^:0-9]):{1}[0-9]+:{1}[0-9]+`);

        const result: RegExpExecArray = filePathPattern.exec(data) as RegExpExecArray;

        if (result && (result.length > 1)) {
            this.filePath = result[1];
        }

    }

}
