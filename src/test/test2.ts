import { ModuleTrackTrace } from '../index.js';

import { Test3 } from './test3.js';

import url from "url";
import path from "path";


export class Test2 {

    private myselfIdentifier: string;

    constructor() {
        this.myselfIdentifier = this.constructor.name;

        const fileTracker: ModuleTrackTrace = new ModuleTrackTrace();

        const fileCallerURL: string = fileTracker.getFileCallerURL();

        console.log(`\nWho called ${this.myselfIdentifier}: `, fileCallerURL);

        new Test3();

        const currentDirectory: string = path.dirname(url.fileURLToPath(import.meta.url));

        const fileCallerDirectory: string = path.dirname(url.fileURLToPath(fileCallerURL));

        const relativeRootPath = path.relative(currentDirectory, process.cwd());

        const relativeModulePath: string = path.relative(process.cwd(), fileCallerDirectory);

        // ainda tem que pegar o path com o nome do arquivo que o usuário informou como parâmetro para o método de importação e juntar com relativeDirectory adicionando a / antes
        const relativeDirectory = `${relativeRootPath}/${relativeModulePath}`
            .replace(/\\/g, '/')
            .replace(/(\/){2,}/g, '/')
            .replace(/[^.](\.\/)+/, '/');
    }

}
