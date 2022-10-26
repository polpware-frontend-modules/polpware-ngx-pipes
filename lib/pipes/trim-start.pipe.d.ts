import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TrimStartPipe implements PipeTransform {
    transform(value: string, maxLen: number, appendEllipsis?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrimStartPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TrimStartPipe, "trimStart">;
}
