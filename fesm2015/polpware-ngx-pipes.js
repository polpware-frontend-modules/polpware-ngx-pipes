import { ɵɵdefinePipe, ɵsetClassMetadata, Pipe, ɵɵdirectiveInject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
*/
class FileSizePipe {
    constructor() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
    }
    transform(bytes = 0, precision = 2) {
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return '?';
        }
        let unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    }
}
/** @nocollapse */ FileSizePipe.ɵfac = function FileSizePipe_Factory(t) { return new (t || FileSizePipe)(); };
/** @nocollapse */ FileSizePipe.ɵpipe = ɵɵdefinePipe({ name: "fileSize", type: FileSizePipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FileSizePipe, [{
        type: Pipe,
        args: [{ name: 'fileSize' }]
    }], null, null); })();

class ShortenFullpathPipe {
    shortJustName(value, left, right) {
        if (value.length <= left + right) {
            return value;
        }
        const index = value.lastIndexOf('.');
        if (index === -1) {
            // no extension
            return value.substring(0, left) + '...' + value.substring(value.length - right);
        }
        // has extension
        const ext = value.substring(index);
        if (ext.length >= left + right) {
            return '...' + ext;
        }
        return value.substring(0, left + right - ext.length) + '...' + ext;
    }
    transform(value, maxlen) {
        if (value.length <= maxlen) {
            return value;
        }
        const leftLen = Math.trunc(maxlen / 2);
        const rightLen = maxlen - leftLen;
        const index = value.lastIndexOf('\\');
        if (index === -1) {
            return this.shortJustName(value, leftLen, rightLen);
        }
        else {
            const r = this.shortJustName(value.substring(index + 1), leftLen, rightLen);
            return '...\\' + r;
        }
    }
}
/** @nocollapse */ ShortenFullpathPipe.ɵfac = function ShortenFullpathPipe_Factory(t) { return new (t || ShortenFullpathPipe)(); };
/** @nocollapse */ ShortenFullpathPipe.ɵpipe = ɵɵdefinePipe({ name: "shortenFullpath", type: ShortenFullpathPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ShortenFullpathPipe, [{
        type: Pipe,
        args: [{ name: 'shortenFullpath' }]
    }], null, null); })();

class ParentDirPipe {
    // Remove the last part of a path.
    transform(value) {
        if (!value) {
            return '';
        }
        const index = value.lastIndexOf('\\');
        if (index === -1) {
            return '';
        }
        else {
            return value.substring(0, index);
        }
    }
}
/** @nocollapse */ ParentDirPipe.ɵfac = function ParentDirPipe_Factory(t) { return new (t || ParentDirPipe)(); };
/** @nocollapse */ ParentDirPipe.ɵpipe = ɵɵdefinePipe({ name: "parentDir", type: ParentDirPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ParentDirPipe, [{
        type: Pipe,
        args: [{ name: 'parentDir' }]
    }], null, null); })();

class SafeDomPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
/** @nocollapse */ SafeDomPipe.ɵfac = function SafeDomPipe_Factory(t) { return new (t || SafeDomPipe)(ɵɵdirectiveInject(DomSanitizer)); };
/** @nocollapse */ SafeDomPipe.ɵpipe = ɵɵdefinePipe({ name: "safeDom", type: SafeDomPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SafeDomPipe, [{
        type: Pipe,
        args: [{
                name: 'safeDom'
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

/*
 * Transform a string into an array of segments.
 * Usage:
 *   path | segments
 * Example:
 *   {{ '\test\tt' |  segments:'\\' }}
 *   formats to: ['test', 'tt']
*/
class SegmentsPipe {
    transform(path, separator = '\\') {
        if (!path) {
            return [];
        }
        let ss = path.split(separator);
        ss = ss.filter(x => x.length > 0);
        const len = ss.length;
        const pp = ss.map((y, index) => {
            return {
                value: y,
                id: index,
                lastId: len - 1
            };
        });
        return pp;
    }
}
/** @nocollapse */ SegmentsPipe.ɵfac = function SegmentsPipe_Factory(t) { return new (t || SegmentsPipe)(); };
/** @nocollapse */ SegmentsPipe.ɵpipe = ɵɵdefinePipe({ name: "segments", type: SegmentsPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SegmentsPipe, [{
        type: Pipe,
        args: [{ name: 'segments' }]
    }], null, null); })();

class UnrollArrayPipe {
    transform(value) {
        const len = value.length;
        const half = Math.floor(len / 2);
        let index = 0;
        const groups = [];
        for (let i = 0; i < half; i++) {
            groups.push({
                first: value[index],
                second: value[index + 1]
            });
            index += 2;
        }
        let last = null;
        if (index < len) {
            last = value[index];
        }
        return {
            pairs: groups,
            last: last
        };
    }
}
/** @nocollapse */ UnrollArrayPipe.ɵfac = function UnrollArrayPipe_Factory(t) { return new (t || UnrollArrayPipe)(); };
/** @nocollapse */ UnrollArrayPipe.ɵpipe = ɵɵdefinePipe({ name: "unrollArray", type: UnrollArrayPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UnrollArrayPipe, [{
        type: Pipe,
        args: [{ name: 'unrollArray' }]
    }], null, null); })();

class UnzipObjectPipe {
    transform(value, ...args) {
        const keys = [];
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }
}
/** @nocollapse */ UnzipObjectPipe.ɵfac = function UnzipObjectPipe_Factory(t) { return new (t || UnzipObjectPipe)(); };
/** @nocollapse */ UnzipObjectPipe.ɵpipe = ɵɵdefinePipe({ name: "unzipObject", type: UnzipObjectPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UnzipObjectPipe, [{
        type: Pipe,
        args: [{ name: 'unzipObject' }]
    }], null, null); })();

class PolpwareNgxPipesModule {
}
/** @nocollapse */ PolpwareNgxPipesModule.ɵmod = ɵɵdefineNgModule({ type: PolpwareNgxPipesModule });
/** @nocollapse */ PolpwareNgxPipesModule.ɵinj = ɵɵdefineInjector({ factory: function PolpwareNgxPipesModule_Factory(t) { return new (t || PolpwareNgxPipesModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PolpwareNgxPipesModule, { declarations: [UnrollArrayPipe,
        SegmentsPipe,
        ShortenFullpathPipe,
        FileSizePipe,
        UnzipObjectPipe,
        ParentDirPipe,
        SafeDomPipe], imports: [CommonModule], exports: [UnrollArrayPipe,
        SegmentsPipe,
        ShortenFullpathPipe,
        FileSizePipe,
        UnzipObjectPipe,
        ParentDirPipe,
        SafeDomPipe] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PolpwareNgxPipesModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    UnrollArrayPipe,
                    SegmentsPipe,
                    ShortenFullpathPipe,
                    FileSizePipe,
                    UnzipObjectPipe,
                    ParentDirPipe,
                    SafeDomPipe
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    UnrollArrayPipe,
                    SegmentsPipe,
                    ShortenFullpathPipe,
                    FileSizePipe,
                    UnzipObjectPipe,
                    ParentDirPipe,
                    SafeDomPipe
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-pipes
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FileSizePipe, ParentDirPipe, PolpwareNgxPipesModule, SafeDomPipe, SegmentsPipe, ShortenFullpathPipe, UnrollArrayPipe, UnzipObjectPipe };
//# sourceMappingURL=polpware-ngx-pipes.js.map
