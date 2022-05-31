import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SegmentsPipe implements PipeTransform {
    transform(path: string, separator?: string): Array<{
        value: string;
        id: number;
        lastId: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SegmentsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SegmentsPipe, "segments">;
}
