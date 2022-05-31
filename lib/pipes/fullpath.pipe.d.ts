import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ShortenFullpathPipe implements PipeTransform {
    private shortJustName;
    transform(value: string, maxlen: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShortenFullpathPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ShortenFullpathPipe, "shortenFullpath">;
}
