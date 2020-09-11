import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FileSizePipe implements PipeTransform {
    private units;
    transform(bytes?: number, precision?: number): string;
    static ɵfac: i0.ɵɵFactoryDef<FileSizePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<FileSizePipe, "fileSize">;
}
