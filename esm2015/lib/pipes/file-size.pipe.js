/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
*/
export class FileSizePipe {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileSizePipe.prototype.units;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXBpcGVzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ZpbGUtc2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVlwRCxNQUFNLE9BQU8sWUFBWTtJQUR6QjtRQUdZLFVBQUssR0FBRztZQUNaLE9BQU87WUFDUCxJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtTQUNQLENBQUM7SUFnQk4sQ0FBQzs7Ozs7O0lBZEcsU0FBUyxDQUFDLFFBQWdCLENBQUMsRUFBRSxZQUFvQixDQUFDO1FBQzlDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RELE9BQU8sR0FBRyxDQUFDO1NBQ2Q7O1lBRUcsSUFBSSxHQUFHLENBQUM7UUFFWixPQUFPLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDbEIsS0FBSyxJQUFJLElBQUksQ0FBQztZQUNkLElBQUksRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBRSxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUF6QkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7Ozs7OztJQUd0Qiw2QkFPRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qXHJcbiAqIENvbnZlcnQgYnl0ZXMgaW50byBsYXJnZXN0IHBvc3NpYmxlIHVuaXQuXHJcbiAqIFRha2VzIGFuIHByZWNpc2lvbiBhcmd1bWVudCB0aGF0IGRlZmF1bHRzIHRvIDIuXHJcbiAqIFVzYWdlOlxyXG4gKiAgIGJ5dGVzIHwgZmlsZVNpemU6cHJlY2lzaW9uXHJcbiAqIEV4YW1wbGU6XHJcbiAqICAge3sgMTAyNCB8ICBmaWxlU2l6ZX19XHJcbiAqICAgZm9ybWF0cyB0bzogMSBLQlxyXG4qL1xyXG5AUGlwZSh7IG5hbWU6ICdmaWxlU2l6ZScgfSlcclxuZXhwb3J0IGNsYXNzIEZpbGVTaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHByaXZhdGUgdW5pdHMgPSBbXHJcbiAgICAgICAgJ2J5dGVzJyxcclxuICAgICAgICAnS0InLFxyXG4gICAgICAgICdNQicsXHJcbiAgICAgICAgJ0dCJyxcclxuICAgICAgICAnVEInLFxyXG4gICAgICAgICdQQidcclxuICAgIF07XHJcblxyXG4gICAgdHJhbnNmb3JtKGJ5dGVzOiBudW1iZXIgPSAwLCBwcmVjaXNpb246IG51bWJlciA9IDIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KFN0cmluZyhieXRlcykpKSB8fCAhaXNGaW5pdGUoYnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdW5pdCA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChieXRlcyA+PSAxMDI0KSB7XHJcbiAgICAgICAgICAgIGJ5dGVzIC89IDEwMjQ7XHJcbiAgICAgICAgICAgIHVuaXQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBieXRlcy50b0ZpeGVkKCsgcHJlY2lzaW9uKSArICcgJyArIHRoaXMudW5pdHNbdW5pdF07XHJcbiAgICB9XHJcbn1cclxuIl19