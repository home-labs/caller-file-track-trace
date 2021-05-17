// declare global {

//     interface Error {
//         prepareStackTrace: () => Object[];
//     }

// }

// Error.prepareStackTrace = (error, structuredStackTrace) => {
//     return structuredStackTrace;
// };


export class ModuleTrackTrace {

    private stack: string[];

    private filePath: string;

    constructor() {
        const error: Error = new Error();

        this.stack = error.stack?.split('\n') as string[];

        this.filePath = '';

        this.resolveData();
    }

    getAbsolutePathOfFileCaller(): string {
        return this.filePath;
    }

    private resolveData() {

        const data: string = this.stack[3];

        const pattern: RegExp = new RegExp(`(file:[/]{2}.+[^:0-9]):{1}[0-9]+:{1}[0-9]+`);

        const result: RegExpExecArray = pattern.exec(data) as RegExpExecArray;

        if (result && result.length > 1) {
            this.filePath = result[1];
        }

        // while ()

        // pra pegar o arquivo. Usar o .exec() e pegar o grupo 1 do que for retornado
        //
        // \((file:\/\/\/.[^:]+):[0-9]+:[0-9]+\)$

        // let filename: string = '';

        // try {
        //     const error: Error = new Error();

        //     filename = ((error.stack as any)[2] as any).getFileName();
        // } catch (r) { }

        // return filename;

    }

}
