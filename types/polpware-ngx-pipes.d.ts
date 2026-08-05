import * as i0 from '@angular/core';
import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import * as i10 from '@angular/common';

declare class FileSizePipe implements PipeTransform {
    private units;
    transform(bytes?: number, precision?: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileSizePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FileSizePipe, "fileSize", false>;
}

declare class ShortenFullpathPipe implements PipeTransform {
    private shortJustName;
    transform(value: string, maxlen: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShortenFullpathPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ShortenFullpathPipe, "shortenFullpath", false>;
}

declare class ParentDirPipe implements PipeTransform {
    transform(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParentDirPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ParentDirPipe, "parentDir", false>;
}

declare class SafeDomPipe implements PipeTransform {
    protected sanitizer: DomSanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<SafeDomPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SafeDomPipe, "safeDom", false>;
}

declare class SegmentsPipe implements PipeTransform {
    transform(path: string, separator?: string): Array<{
        value: string;
        id: number;
        lastId: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SegmentsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SegmentsPipe, "segments", false>;
}

interface IPair {
    first: any;
    second: any;
}
interface IUnrollResult {
    pairs: Array<IPair>;
    last: any;
}
declare class UnrollArrayPipe implements PipeTransform {
    transform(value: Array<any>): IUnrollResult;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnrollArrayPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<UnrollArrayPipe, "unrollArray", false>;
}

declare class UnzipObjectPipe implements PipeTransform {
    transform(value: Object, ...args: string[]): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<UnzipObjectPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<UnzipObjectPipe, "unzipObject", false>;
}

declare class TrimStartPipe implements PipeTransform {
    transform(value: string, maxLen: number, appendEllipsis?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrimStartPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TrimStartPipe, "trimStart", false>;
}

declare class TrimEndPipe implements PipeTransform {
    transform(value: string, maxLen: number, appendEllipsis?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrimEndPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TrimEndPipe, "trimEnd", false>;
}

declare class PolpwareNgxPipesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PolpwareNgxPipesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PolpwareNgxPipesModule, [typeof UnrollArrayPipe, typeof SegmentsPipe, typeof ShortenFullpathPipe, typeof FileSizePipe, typeof UnzipObjectPipe, typeof ParentDirPipe, typeof SafeDomPipe, typeof TrimEndPipe, typeof TrimStartPipe], [typeof i10.CommonModule], [typeof UnrollArrayPipe, typeof SegmentsPipe, typeof ShortenFullpathPipe, typeof FileSizePipe, typeof UnzipObjectPipe, typeof ParentDirPipe, typeof SafeDomPipe, typeof TrimEndPipe, typeof TrimStartPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PolpwareNgxPipesModule>;
}

export { FileSizePipe, ParentDirPipe, PolpwareNgxPipesModule, SafeDomPipe, SegmentsPipe, ShortenFullpathPipe, TrimEndPipe, TrimStartPipe, UnrollArrayPipe, UnzipObjectPipe };
