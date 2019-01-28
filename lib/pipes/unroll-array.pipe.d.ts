import { PipeTransform } from '@angular/core';
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
}
export {};