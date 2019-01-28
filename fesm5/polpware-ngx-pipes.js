import { CommonModule } from '@angular/common';
import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UnrollArrayPipe = /** @class */ (function () {
    function UnrollArrayPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    UnrollArrayPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var len = value.length;
        /** @type {?} */
        var half = Math.floor(len / 2);
        /** @type {?} */
        var index = 0;
        /** @type {?} */
        var groups = [];
        for (var i = 0; i < half; i++) {
            groups.push({
                first: value[index],
                second: value[index + 1]
            });
            index += 2;
        }
        /** @type {?} */
        var last = null;
        if (index < len) {
            last = value[index];
        }
        return {
            pairs: groups,
            last: last
        };
    };
    UnrollArrayPipe.decorators = [
        { type: Pipe, args: [{ name: 'unrollArray' },] }
    ];
    return UnrollArrayPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} path
     * @param {?=} separator
     * @return {?}
     */
    SegmentsPipe.prototype.transform = /**
     * @param {?} path
     * @param {?=} separator
     * @return {?}
     */
    function (path, separator) {
        if (separator === void 0) { separator = '\\'; }
        if (!path) {
            return [];
        }
        /** @type {?} */
        var ss = path.split(separator);
        ss = ss.filter(function (x) { return x.length > 0; });
        /** @type {?} */
        var len = ss.length;
        /** @type {?} */
        var pp = ss.map(function (y, index) {
            return {
                value: y,
                id: index,
                lastId: len - 1
            };
        });
        return pp;
    };
    SegmentsPipe.decorators = [
        { type: Pipe, args: [{ name: 'segments' },] }
    ];
    return SegmentsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShortenFullpathPipe = /** @class */ (function () {
    function ShortenFullpathPipe() {
    }
    /**
     * @private
     * @param {?} value
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    ShortenFullpathPipe.prototype.shortJustName = /**
     * @private
     * @param {?} value
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (value, left, right) {
        if (value.length <= left + right) {
            return value;
        }
        /** @type {?} */
        var index = value.lastIndexOf('.');
        if (index === -1) {
            // no extension
            return value.substring(0, left) + '...' + value.substring(value.length - right);
        }
        // has extension
        /** @type {?} */
        var ext = value.substring(index);
        if (ext.length >= left + right) {
            return '...' + ext;
        }
        return value.substring(0, left + right - ext.length) + '...' + ext;
    };
    /**
     * @param {?} value
     * @param {?} maxlen
     * @return {?}
     */
    ShortenFullpathPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} maxlen
     * @return {?}
     */
    function (value, maxlen) {
        if (value.length <= maxlen) {
            return value;
        }
        /** @type {?} */
        var leftLen = Math.trunc(maxlen / 2);
        /** @type {?} */
        var rightLen = maxlen - leftLen;
        /** @type {?} */
        var index = value.lastIndexOf('\\');
        if (index === -1) {
            return this.shortJustName(value, leftLen, rightLen);
        }
        else {
            /** @type {?} */
            var r = this.shortJustName(value.substring(index + 1), leftLen, rightLen);
            return '...\\' + r;
        }
    };
    ShortenFullpathPipe.decorators = [
        { type: Pipe, args: [{ name: 'shortenFullpath' },] }
    ];
    return ShortenFullpathPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?=} bytes
     * @param {?=} precision
     * @return {?}
     */
    FileSizePipe.prototype.transform = /**
     * @param {?=} bytes
     * @param {?=} precision
     * @return {?}
     */
    function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return '?';
        }
        /** @type {?} */
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    FileSizePipe.decorators = [
        { type: Pipe, args: [{ name: 'fileSize' },] }
    ];
    return FileSizePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UnzipObjectPipe = /** @class */ (function () {
    function UnzipObjectPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    UnzipObjectPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    };
    UnzipObjectPipe.decorators = [
        { type: Pipe, args: [{ name: 'unzipObject' },] }
    ];
    return UnzipObjectPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParentDirPipe = /** @class */ (function () {
    function ParentDirPipe() {
    }
    // Remove the last part of a path.
    // Remove the last part of a path.
    /**
     * @param {?} value
     * @return {?}
     */
    ParentDirPipe.prototype.transform = 
    // Remove the last part of a path.
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return '';
        }
        /** @type {?} */
        var index = value.lastIndexOf('\\');
        if (index === -1) {
            return '';
        }
        else {
            return value.substring(0, index);
        }
    };
    ParentDirPipe.decorators = [
        { type: Pipe, args: [{ name: 'parentDir' },] }
    ];
    return ParentDirPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PolpwareNgxPipesModule = /** @class */ (function () {
    function PolpwareNgxPipesModule() {
    }
    PolpwareNgxPipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        UnrollArrayPipe,
                        SegmentsPipe,
                        ShortenFullpathPipe,
                        FileSizePipe,
                        UnzipObjectPipe,
                        ParentDirPipe
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
                        ParentDirPipe
                    ]
                },] }
    ];
    return PolpwareNgxPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PolpwareNgxPipesModule, FileSizePipe as ɵd, ShortenFullpathPipe as ɵc, ParentDirPipe as ɵf, SegmentsPipe as ɵb, UnrollArrayPipe as ɵa, UnzipObjectPipe as ɵe };

//# sourceMappingURL=polpware-ngx-pipes.js.map