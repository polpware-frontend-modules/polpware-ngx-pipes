import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TrimEndPipe implements PipeTransform {
    transform(value: string, maxLen: number, appendEllipsis?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrimEndPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TrimEndPipe, "trimEnd">;
}
