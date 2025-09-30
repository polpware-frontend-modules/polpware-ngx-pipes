import * as i0 from '@angular/core';
import { Pipe, NgModule } from '@angular/core';
import * as i1 from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { formatDistanceToNow, isValid, startOfToday, differenceInCalendarDays, isToday, format, isYesterday, isTomorrow } from 'date-fns';

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
    /** @nocollapse */ static { this.ɵfac = function FileSizePipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FileSizePipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "fileSize", type: FileSizePipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileSizePipe, [{
        type: Pipe,
        args: [{
                name: 'fileSize',
                standalone: false
            }]
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
    /** @nocollapse */ static { this.ɵfac = function ShortenFullpathPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ShortenFullpathPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "shortenFullpath", type: ShortenFullpathPipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShortenFullpathPipe, [{
        type: Pipe,
        args: [{
                name: 'shortenFullpath',
                standalone: false
            }]
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
    /** @nocollapse */ static { this.ɵfac = function ParentDirPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ParentDirPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "parentDir", type: ParentDirPipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentDirPipe, [{
        type: Pipe,
        args: [{
                name: 'parentDir',
                standalone: false
            }]
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
    /** @nocollapse */ static { this.ɵfac = function SafeDomPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SafeDomPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "safeDom", type: SafeDomPipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeDomPipe, [{
        type: Pipe,
        args: [{
                name: 'safeDom',
                standalone: false
            }]
    }], () => [{ type: i1.DomSanitizer }], null); })();

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
    /** @nocollapse */ static { this.ɵfac = function SegmentsPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SegmentsPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "segments", type: SegmentsPipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SegmentsPipe, [{
        type: Pipe,
        args: [{
                name: 'segments',
                standalone: false
            }]
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
    /** @nocollapse */ static { this.ɵfac = function UnrollArrayPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UnrollArrayPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "unrollArray", type: UnrollArrayPipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnrollArrayPipe, [{
        type: Pipe,
        args: [{
                name: 'unrollArray',
                standalone: false
            }]
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
    /** @nocollapse */ static { this.ɵfac = function UnzipObjectPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UnzipObjectPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "unzipObject", type: UnzipObjectPipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnzipObjectPipe, [{
        type: Pipe,
        args: [{
                name: 'unzipObject',
                standalone: false
            }]
    }], null, null); })();

class TrimStartPipe {
    transform(value, maxLen, appendEllipsis = true) {
        if (!value) {
            return '';
        }
        if (value.length <= maxLen) {
            return value;
        }
        return (appendEllipsis ? '...' : '') + value.substring(value.length - maxLen, value.length - 1);
    }
    /** @nocollapse */ static { this.ɵfac = function TrimStartPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrimStartPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "trimStart", type: TrimStartPipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrimStartPipe, [{
        type: Pipe,
        args: [{
                name: 'trimStart',
                standalone: false
            }]
    }], null, null); })();

class TrimEndPipe {
    transform(value, maxLen, appendEllipsis = true) {
        if (!value) {
            return '';
        }
        if (value.length <= maxLen) {
            return value;
        }
        return value.substring(0, maxLen - 1) + (appendEllipsis ? '...' : '');
    }
    /** @nocollapse */ static { this.ɵfac = function TrimEndPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrimEndPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "trimEnd", type: TrimEndPipe, pure: true, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrimEndPipe, [{
        type: Pipe,
        args: [{
                name: 'trimEnd',
                standalone: false
            }]
    }], null, null); })();

class PolpwareNgxPipesModule {
    /** @nocollapse */ static { this.ɵfac = function PolpwareNgxPipesModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PolpwareNgxPipesModule)(); }; }
    /** @nocollapse */ static { this.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: PolpwareNgxPipesModule }); }
    /** @nocollapse */ static { this.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpwareNgxPipesModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    UnrollArrayPipe,
                    SegmentsPipe,
                    ShortenFullpathPipe,
                    FileSizePipe,
                    UnzipObjectPipe,
                    ParentDirPipe,
                    SafeDomPipe,
                    TrimEndPipe,
                    TrimStartPipe
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
                    SafeDomPipe,
                    TrimEndPipe,
                    TrimStartPipe
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpwareNgxPipesModule, { declarations: [UnrollArrayPipe,
        SegmentsPipe,
        ShortenFullpathPipe,
        FileSizePipe,
        UnzipObjectPipe,
        ParentDirPipe,
        SafeDomPipe,
        TrimEndPipe,
        TrimStartPipe], imports: [CommonModule], exports: [UnrollArrayPipe,
        SegmentsPipe,
        ShortenFullpathPipe,
        FileSizePipe,
        UnzipObjectPipe,
        ParentDirPipe,
        SafeDomPipe,
        TrimEndPipe,
        TrimStartPipe] }); })();

class AmFromUtcPipe {
    transform(value) {
        if (!value) {
            return null;
        }
        // If it's already a Date object, return it as is.
        if (value instanceof Date) {
            return value;
        }
        const dateString = String(value);
        // If the string already specifies a timezone (like 'Z' or '+00:00'),
        // new Date() will correctly parse it as UTC.
        if (dateString.endsWith('Z') || dateString.includes('+')) {
            return new Date(dateString);
        }
        // Otherwise, append 'Z' to treat the string as UTC.
        return new Date(`${dateString}Z`);
    }
    /** @nocollapse */ static { this.ɵfac = function AmFromUtcPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AmFromUtcPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "amFromUtc", type: AmFromUtcPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AmFromUtcPipe, [{
        type: Pipe,
        args: [{
                name: 'amFromUtc',
                standalone: true,
            }]
    }], null, null); })();

class AmLocalPipe {
    transform(value) {
        if (!value) {
            return null;
        }
        // Creating a new Date object from the input value ensures that
        // subsequent formatting will use the browser's local timezone.
        try {
            return new Date(value);
        }
        catch (e) {
            console.error(`Invalid date value provided to amLocal pipe: ${value}`);
            return null;
        }
    }
    /** @nocollapse */ static { this.ɵfac = function AmLocalPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AmLocalPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "amLocal", type: AmLocalPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AmLocalPipe, [{
        type: Pipe,
        args: [{
                name: 'amLocal',
                standalone: true,
            }]
    }], null, null); })();

class AmTimeAgoPipe {
    constructor(changeDetector, ngZone) {
        this.changeDetector = changeDetector;
        this.ngZone = ngZone;
        this.timer = null;
        this.lastValue = null;
        this.lastResult = '';
    }
    transform(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.removeTimer();
            this.setupTimer();
            this.lastResult = this.calculateValue(value);
        }
        return this.lastResult;
    }
    ngOnDestroy() {
        this.removeTimer();
    }
    calculateValue(value) {
        if (!value) {
            return '';
        }
        try {
            const date = new Date(value);
            return formatDistanceToNow(date, { addSuffix: true });
        }
        catch (e) {
            console.error(`Invalid date value provided to amTimeAgo pipe: ${value}`);
            return '';
        }
    }
    setupTimer() {
        // Run the timer outside of Angular's zone to prevent unnecessary change detection cycles
        this.ngZone.runOutsideAngular(() => {
            // Refresh every 30 seconds
            this.timer = window.setInterval(() => {
                // Run back inside Angular's zone to update the view
                this.ngZone.run(() => {
                    this.lastResult = this.calculateValue(this.lastValue);
                    this.changeDetector.markForCheck();
                });
            }, 30000);
        });
    }
    removeTimer() {
        if (this.timer) {
            window.clearInterval(this.timer);
            this.timer = null;
        }
    }
    /** @nocollapse */ static { this.ɵfac = function AmTimeAgoPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AmTimeAgoPipe)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 16), i0.ɵɵdirectiveInject(i0.NgZone, 16)); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "amTimeAgo", type: AmTimeAgoPipe, pure: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AmTimeAgoPipe, [{
        type: Pipe,
        args: [{
                name: 'amTimeAgo',
                standalone: true,
                // Make the pipe impure so it can be re-evaluated on changes other than its input
                pure: false,
            }]
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }], null); })();

/**
 * A pipe that formats a date with calendar-like, relative time strings,
 * similar to the `amCalendar` pipe from `ngx-moment`, but using `date-fns`.
 *
 * @usage
 * `{{ myDate | amCalendar }}`
 *
 * @example
 * // If today is 2025-09-29
 * '2025-09-29T14:00:00' | amCalendar -> 'Today at 2:00 PM'
 * '2025-09-28T10:00:00' | amCalendar -> 'Yesterday at 10:00 AM'
 * '2025-09-30T09:00:00' | amCalendar -> 'Tomorrow at 9:00 AM'
 * '2025-10-02T11:00:00' | amCalendar -> 'Thursday at 11:00 AM'
 * '2025-09-25T11:00:00' | amCalendar -> 'Last Thursday at 11:00 AM'
 * '2025-01-01T12:00:00' | amCalendar -> '01/01/2025'
 */
class CalendarDatePipe {
    transform(value) {
        if (value === null || value === undefined) {
            return '';
        }
        const date = new Date(value);
        if (!isValid(date)) {
            console.warn(`amCalendar: Received an invalid date value: ${value}`);
            return ''; // Return empty string for invalid dates
        }
        const now = startOfToday();
        const dayDiff = differenceInCalendarDays(date, now);
        // Using `isToday`, `isYesterday`, and `isTomorrow` is also a very
        // readable alternative for these specific checks.
        if (isToday(date)) {
            return `Today at ${format(date, 'p')}`;
        }
        if (isYesterday(date)) {
            return `Yesterday at ${format(date, 'p')}`;
        }
        if (isTomorrow(date)) {
            return `Tomorrow at ${format(date, 'p')}`;
        }
        // For dates within the next week (but not tomorrow)
        if (dayDiff > 1 && dayDiff < 7) {
            // e.g., 'Tuesday at 10:04 PM'
            return format(date, "eeee 'at' p");
        }
        // For dates within the last week (but not yesterday)
        if (dayDiff < -1 && dayDiff > -7) {
            // e.g., 'Last Monday at 10:04 PM'
            return `Last ${format(date, "eeee 'at' p")}`;
        }
        // For all other dates, return a standard short date format
        return format(date, 'P'); // e.g., '09/29/2025'
    }
    /** @nocollapse */ static { this.ɵfac = function CalendarDatePipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CalendarDatePipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "amCalendar", type: CalendarDatePipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarDatePipe, [{
        type: Pipe,
        args: [{
                name: 'amCalendar',
                standalone: true
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-pipes
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AmFromUtcPipe, AmLocalPipe, AmTimeAgoPipe, CalendarDatePipe, FileSizePipe, ParentDirPipe, PolpwareNgxPipesModule, SafeDomPipe, SegmentsPipe, ShortenFullpathPipe, TrimEndPipe, TrimStartPipe, UnrollArrayPipe, UnzipObjectPipe };
//# sourceMappingURL=polpware-ngx-pipes.mjs.map
