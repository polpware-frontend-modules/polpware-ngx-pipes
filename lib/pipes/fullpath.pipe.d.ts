import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ShortenFullpathPipe implements PipeTransform {
    private shortJustName;
    transform(value: string, maxlen: number): string;
    static ɵfac: i0.ɵɵFactoryDef<ShortenFullpathPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<ShortenFullpathPipe, "shortenFullpath">;
}
