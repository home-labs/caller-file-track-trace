declare global {

    interface Error {
        prepareStackTrace: () => Object[];
    }

}

Error.prepareStackTrace = (error, structuredStackTrace) => {
    return structuredStackTrace;
};


export class ModuleTracker {

    getAbsolutePathOfFileCaller(): string {

        let filename: string = '';

        try {
            const error: Error = new Error();

            filename = ((error.stack as any)[2] as any).getFileName();
        } catch (r) { }

        return filename;
    }

}
