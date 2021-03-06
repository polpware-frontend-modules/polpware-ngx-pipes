import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
interface IPair {
    first: any;
    second: any;
}
interface IUnrollResult {
    pairs: Array<IPair>;
    last: any;
}
export declare class UnrollArrayPipe implements PipeTransform {
    transform(value: Array<any>): IUnrollResult;
    static ɵfac: i0.ɵɵFactoryDef<UnrollArrayPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<UnrollArrayPipe, "unrollArray">;
}
export {};
