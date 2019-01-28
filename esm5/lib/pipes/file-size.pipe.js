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
export { FileSizePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileSizePipe.prototype.units;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXBpcGVzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ZpbGUtc2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVdwRDtJQUFBO1FBR1ksVUFBSyxHQUFHO1lBQ1osT0FBTztZQUNQLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1NBQ1AsQ0FBQztJQWdCTixDQUFDOzs7Ozs7SUFkRyxnQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWlCLEVBQUUsU0FBcUI7UUFBeEMsc0JBQUEsRUFBQSxTQUFpQjtRQUFFLDBCQUFBLEVBQUEsYUFBcUI7UUFDOUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEQsT0FBTyxHQUFHLENBQUM7U0FDZDs7WUFFRyxJQUFJLEdBQUcsQ0FBQztRQUVaLE9BQU8sS0FBSyxJQUFJLElBQUksRUFBRTtZQUNsQixLQUFLLElBQUksSUFBSSxDQUFDO1lBQ2QsSUFBSSxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQXpCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOztJQTBCMUIsbUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSxZQUFZOzs7Ozs7SUFFckIsNkJBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKlxyXG4gKiBDb252ZXJ0IGJ5dGVzIGludG8gbGFyZ2VzdCBwb3NzaWJsZSB1bml0LlxyXG4gKiBUYWtlcyBhbiBwcmVjaXNpb24gYXJndW1lbnQgdGhhdCBkZWZhdWx0cyB0byAyLlxyXG4gKiBVc2FnZTpcclxuICogICBieXRlcyB8IGZpbGVTaXplOnByZWNpc2lvblxyXG4gKiBFeGFtcGxlOlxyXG4gKiAgIHt7IDEwMjQgfCAgZmlsZVNpemV9fVxyXG4gKiAgIGZvcm1hdHMgdG86IDEgS0JcclxuKi9cclxuQFBpcGUoeyBuYW1lOiAnZmlsZVNpemUnIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2l6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBwcml2YXRlIHVuaXRzID0gW1xyXG4gICAgICAgICdieXRlcycsXHJcbiAgICAgICAgJ0tCJyxcclxuICAgICAgICAnTUInLFxyXG4gICAgICAgICdHQicsXHJcbiAgICAgICAgJ1RCJyxcclxuICAgICAgICAnUEInXHJcbiAgICBdO1xyXG5cclxuICAgIHRyYW5zZm9ybShieXRlczogbnVtYmVyID0gMCwgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChTdHJpbmcoYnl0ZXMpKSkgfHwgIWlzRmluaXRlKGJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJz8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHVuaXQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoYnl0ZXMgPj0gMTAyNCkge1xyXG4gICAgICAgICAgICBieXRlcyAvPSAxMDI0O1xyXG4gICAgICAgICAgICB1bml0Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnl0ZXMudG9GaXhlZCgrIHByZWNpc2lvbikgKyAnICcgKyB0aGlzLnVuaXRzW3VuaXRdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==