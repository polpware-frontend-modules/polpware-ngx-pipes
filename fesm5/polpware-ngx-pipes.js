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
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
    }
    FileSizePipe.prototype.transform = function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return '?';
        }
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    /** @nocollapse */ FileSizePipe.ɵfac = function FileSizePipe_Factory(t) { return new (t || FileSizePipe)(); };
    /** @nocollapse */ FileSizePipe.ɵpipe = ɵɵdefinePipe({ name: "fileSize", type: FileSizePipe, pure: true });
    return FileSizePipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FileSizePipe, [{
        type: Pipe,
        args: [{ name: 'fileSize' }]
    }], null, null); })();

var ShortenFullpathPipe = /** @class */ (function () {
    function ShortenFullpathPipe() {
    }
    ShortenFullpathPipe.prototype.shortJustName = function (value, left, right) {
        if (value.length <= left + right) {
            return value;
        }
        var index = value.lastIndexOf('.');
        if (index === -1) {
            // no extension
            return value.substring(0, left) + '...' + value.substring(value.length - right);
        }
        // has extension
        var ext = value.substring(index);
        if (ext.length >= left + right) {
            return '...' + ext;
        }
        return value.substring(0, left + right - ext.length) + '...' + ext;
    };
    ShortenFullpathPipe.prototype.transform = function (value, maxlen) {
        if (value.length <= maxlen) {
            return value;
        }
        var leftLen = Math.trunc(maxlen / 2);
        var rightLen = maxlen - leftLen;
        var index = value.lastIndexOf('\\');
        if (index === -1) {
            return this.shortJustName(value, leftLen, rightLen);
        }
        else {
            var r = this.shortJustName(value.substring(index + 1), leftLen, rightLen);
            return '...\\' + r;
        }
    };
    /** @nocollapse */ ShortenFullpathPipe.ɵfac = function ShortenFullpathPipe_Factory(t) { return new (t || ShortenFullpathPipe)(); };
    /** @nocollapse */ ShortenFullpathPipe.ɵpipe = ɵɵdefinePipe({ name: "shortenFullpath", type: ShortenFullpathPipe, pure: true });
    return ShortenFullpathPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ShortenFullpathPipe, [{
        type: Pipe,
        args: [{ name: 'shortenFullpath' }]
    }], null, null); })();

var ParentDirPipe = /** @class */ (function () {
    function ParentDirPipe() {
    }
    // Remove the last part of a path.
    ParentDirPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        var index = value.lastIndexOf('\\');
        if (index === -1) {
            return '';
        }
        else {
            return value.substring(0, index);
        }
    };
    /** @nocollapse */ ParentDirPipe.ɵfac = function ParentDirPipe_Factory(t) { return new (t || ParentDirPipe)(); };
    /** @nocollapse */ ParentDirPipe.ɵpipe = ɵɵdefinePipe({ name: "parentDir", type: ParentDirPipe, pure: true });
    return ParentDirPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ParentDirPipe, [{
        type: Pipe,
        args: [{ name: 'parentDir' }]
    }], null, null); })();

var SafeDomPipe = /** @class */ (function () {
    function SafeDomPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeDomPipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    /** @nocollapse */ SafeDomPipe.ɵfac = function SafeDomPipe_Factory(t) { return new (t || SafeDomPipe)(ɵɵdirectiveInject(DomSanitizer)); };
    /** @nocollapse */ SafeDomPipe.ɵpipe = ɵɵdefinePipe({ name: "safeDom", type: SafeDomPipe, pure: true });
    return SafeDomPipe;
}());
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
var SegmentsPipe = /** @class */ (function () {
    function SegmentsPipe() {
    }
    SegmentsPipe.prototype.transform = function (path, separator) {
        if (separator === void 0) { separator = '\\'; }
        if (!path) {
            return [];
        }
        var ss = path.split(separator);
        ss = ss.filter(function (x) { return x.length > 0; });
        var len = ss.length;
        var pp = ss.map(function (y, index) {
            return {
                value: y,
                id: index,
                lastId: len - 1
            };
        });
        return pp;
    };
    /** @nocollapse */ SegmentsPipe.ɵfac = function SegmentsPipe_Factory(t) { return new (t || SegmentsPipe)(); };
    /** @nocollapse */ SegmentsPipe.ɵpipe = ɵɵdefinePipe({ name: "segments", type: SegmentsPipe, pure: true });
    return SegmentsPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SegmentsPipe, [{
        type: Pipe,
        args: [{ name: 'segments' }]
    }], null, null); })();

var UnrollArrayPipe = /** @class */ (function () {
    function UnrollArrayPipe() {
    }
    UnrollArrayPipe.prototype.transform = function (value) {
        var len = value.length;
        var half = Math.floor(len / 2);
        var index = 0;
        var groups = [];
        for (var i = 0; i < half; i++) {
            groups.push({
                first: value[index],
                second: value[index + 1]
            });
            index += 2;
        }
        var last = null;
        if (index < len) {
            last = value[index];
        }
        return {
            pairs: groups,
            last: last
        };
    };
    /** @nocollapse */ UnrollArrayPipe.ɵfac = function UnrollArrayPipe_Factory(t) { return new (t || UnrollArrayPipe)(); };
    /** @nocollapse */ UnrollArrayPipe.ɵpipe = ɵɵdefinePipe({ name: "unrollArray", type: UnrollArrayPipe, pure: true });
    return UnrollArrayPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UnrollArrayPipe, [{
        type: Pipe,
        args: [{ name: 'unrollArray' }]
    }], null, null); })();

var UnzipObjectPipe = /** @class */ (function () {
    function UnzipObjectPipe() {
    }
    UnzipObjectPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    };
    /** @nocollapse */ UnzipObjectPipe.ɵfac = function UnzipObjectPipe_Factory(t) { return new (t || UnzipObjectPipe)(); };
    /** @nocollapse */ UnzipObjectPipe.ɵpipe = ɵɵdefinePipe({ name: "unzipObject", type: UnzipObjectPipe, pure: true });
    return UnzipObjectPipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UnzipObjectPipe, [{
        type: Pipe,
        args: [{ name: 'unzipObject' }]
    }], null, null); })();

var PolpwareNgxPipesModule = /** @class */ (function () {
    function PolpwareNgxPipesModule() {
    }
    /** @nocollapse */ PolpwareNgxPipesModule.ɵmod = ɵɵdefineNgModule({ type: PolpwareNgxPipesModule });
    /** @nocollapse */ PolpwareNgxPipesModule.ɵinj = ɵɵdefineInjector({ factory: function PolpwareNgxPipesModule_Factory(t) { return new (t || PolpwareNgxPipesModule)(); }, imports: [[
                CommonModule
            ]] });
    return PolpwareNgxPipesModule;
}());
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
