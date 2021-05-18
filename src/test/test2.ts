import { ModuleTrackTrace } from '../index.js';

import { Test3 } from './test3.js';

import { URL } from "url";
import url from "url";
import path from "path";


export class Test2 {

    private myselfIdentifier: string;

    constructor() {
        this.myselfIdentifier = this.constructor.name;

        const fileTracker: ModuleTrackTrace = new ModuleTrackTrace();

        console.log(`\nWho called ${this.myselfIdentifier}: `, fileTracker.getAbsolutePathOfFileCaller());

        new Test3();

        const urlObject: URL = new URL(import.meta.url);

        const currentPathname: string = urlObject.pathname

        const currentDirectory: string = path.dirname(url.fileURLToPath(import.meta.url));

        const currentRelativeRootPath = path
        .relative(url.fileURLToPath(import.meta.url), process.cwd());
            // .relative(url.fileURLToPath(path.dirname(import.meta.url)), process.cwd());

        // console.log(`\n${process.cwd()}`);

        // console.log(`\n${currentPathname}`);

        // console.log(`\n` + path.dirname(import.meta.url))

        // console.log(import.meta.url)
        // console.log(url.fileURLToPath(import.meta.url))
        console.log(process.cwd())
        console.log(currentDirectory)

        // console.log(path.relative(path.dirname(url.fileURLToPath(import.meta.url)), process.cwd()))

        // será usado também
        console.log(path.relative(process.cwd(), currentDirectory))

        // a partir do anterior pode-se fazer um .split(path.sep) e, pela quantidade de itens do array, pode-se fazer `..${path.sep}` para cada iteração para formar o path relativo, já que o relative não está funcionando adequadamente quando o segundo é menor que o primeiro
        console.log(path.sep)


        // console.log(currentRelativeRootPath)

    }

}
