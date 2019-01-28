import { PipeTransform } from '@angular/core';
export declare class SegmentsPipe implements PipeTransform {
    transform(path: string, separator?: string): Array<{
        value: string;
        id: number;
        lastId: number;
    }>;
}
