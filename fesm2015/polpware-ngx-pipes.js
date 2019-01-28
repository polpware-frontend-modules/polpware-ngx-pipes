import { CommonModule } from '@angular/common';
import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnrollArrayPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        /** @type {?} */
        const len = value.length;
        /** @type {?} */
        const half = Math.floor(len / 2);
        /** @type {?} */
        let index = 0;
        /** @type {?} */
        const groups = [];
        for (let i = 0; i < half; i++) {
            groups.push({
                first: value[index],
                second: value[index + 1]
            });
            index += 2;
        }
        /** @type {?} */
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
UnrollArrayPipe.decorators = [
    { type: Pipe, args: [{ name: 'unrollArray' },] }
];

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
class SegmentsPipe {
    /**
     * @param {?} path
     * @param {?=} separator
     * @return {?}
     */
    transform(path, separator = '\\') {
        if (!path) {
            return [];
        }
        /** @type {?} */
        let ss = path.split(separator);
        ss = ss.filter(x => x.length > 0);
        /** @type {?} */
        const len = ss.length;
        /** @type {?} */
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
SegmentsPipe.decorators = [
    { type: Pipe, args: [{ name: 'segments' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShortenFullpathPipe {
    /**
     * @private
     * @param {?} value
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    shortJustName(value, left, right) {
        if (value.length <= left + right) {
            return value;
        }
        /** @type {?} */
        const index = value.lastIndexOf('.');
        if (index === -1) {
            // no extension
            return value.substring(0, left) + '...' + value.substring(value.length - right);
        }
        // has extension
        /** @type {?} */
        const ext = value.substring(index);
        if (ext.length >= left + right) {
            return '...' + ext;
        }
        return value.substring(0, left + right - ext.length) + '...' + ext;
    }
    /**
     * @param {?} value
     * @param {?} maxlen
     * @return {?}
     */
    transform(value, maxlen) {
        if (value.length <= maxlen) {
            return value;
        }
        /** @type {?} */
        const leftLen = Math.trunc(maxlen / 2);
        /** @type {?} */
        const rightLen = maxlen - leftLen;
        /** @type {?} */
        const index = value.lastIndexOf('\\');
        if (index === -1) {
            return this.shortJustName(value, leftLen, rightLen);
        }
        else {
            /** @type {?} */
            const r = this.shortJustName(value.substring(index + 1), leftLen, rightLen);
            return '...\\' + r;
        }
    }
}
ShortenFullpathPipe.decorators = [
    { type: Pipe, args: [{ name: 'shortenFullpath' },] }
];

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
    /**
     * @param {?=} bytes
     * @param {?=} precision
     * @return {?}
     */
    transform(bytes = 0, precision = 2) {
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return '?';
        }
        /** @type {?} */
        let unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    }
}
FileSizePipe.decorators = [
    { type: Pipe, args: [{ name: 'fileSize' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnzipObjectPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        const keys = [];
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }
}
UnzipObjectPipe.decorators = [
    { type: Pipe, args: [{ name: 'unzipObject' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParentDirPipe {
    // Remove the last part of a path.
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (!value) {
            return '';
        }
        /** @type {?} */
        const index = value.lastIndexOf('\\');
        if (index === -1) {
            return '';
        }
        else {
            return value.substring(0, index);
        }
    }
}
ParentDirPipe.decorators = [
    { type: Pipe, args: [{ name: 'parentDir' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PolpwareNgxPipesModule {
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