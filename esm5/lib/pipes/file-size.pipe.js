import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ FileSizePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "fileSize", type: FileSizePipe, pure: true });
    return FileSizePipe;
}());
export { FileSizePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FileSizePipe, [{
        type: Pipe,
        args: [{ name: 'fileSize' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXBpcGVzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ZpbGUtc2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRDs7Ozs7Ozs7RUFRRTtBQUNGO0lBQUE7UUFHWSxVQUFLLEdBQUc7WUFDWixPQUFPO1lBQ1AsSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7U0FDUCxDQUFDO0tBZ0JMO0lBZEcsZ0NBQVMsR0FBVCxVQUFVLEtBQWlCLEVBQUUsU0FBcUI7UUFBeEMsc0JBQUEsRUFBQSxTQUFpQjtRQUFFLDBCQUFBLEVBQUEsYUFBcUI7UUFDOUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEQsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUVELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUViLE9BQU8sS0FBSyxJQUFJLElBQUksRUFBRTtZQUNsQixLQUFLLElBQUksSUFBSSxDQUFDO1lBQ2QsSUFBSSxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7K0ZBeEJRLFlBQVk7c0ZBQVosWUFBWTt1QkFaekI7Q0FxQ0MsQUExQkQsSUEwQkM7U0F6QlksWUFBWTtrREFBWixZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKlxyXG4gKiBDb252ZXJ0IGJ5dGVzIGludG8gbGFyZ2VzdCBwb3NzaWJsZSB1bml0LlxyXG4gKiBUYWtlcyBhbiBwcmVjaXNpb24gYXJndW1lbnQgdGhhdCBkZWZhdWx0cyB0byAyLlxyXG4gKiBVc2FnZTpcclxuICogICBieXRlcyB8IGZpbGVTaXplOnByZWNpc2lvblxyXG4gKiBFeGFtcGxlOlxyXG4gKiAgIHt7IDEwMjQgfCAgZmlsZVNpemV9fVxyXG4gKiAgIGZvcm1hdHMgdG86IDEgS0JcclxuKi9cclxuQFBpcGUoeyBuYW1lOiAnZmlsZVNpemUnIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2l6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBwcml2YXRlIHVuaXRzID0gW1xyXG4gICAgICAgICdieXRlcycsXHJcbiAgICAgICAgJ0tCJyxcclxuICAgICAgICAnTUInLFxyXG4gICAgICAgICdHQicsXHJcbiAgICAgICAgJ1RCJyxcclxuICAgICAgICAnUEInXHJcbiAgICBdO1xyXG5cclxuICAgIHRyYW5zZm9ybShieXRlczogbnVtYmVyID0gMCwgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChTdHJpbmcoYnl0ZXMpKSkgfHwgIWlzRmluaXRlKGJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJz8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHVuaXQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoYnl0ZXMgPj0gMTAyNCkge1xyXG4gICAgICAgICAgICBieXRlcyAvPSAxMDI0O1xyXG4gICAgICAgICAgICB1bml0Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnl0ZXMudG9GaXhlZCgrIHByZWNpc2lvbikgKyAnICcgKyB0aGlzLnVuaXRzW3VuaXRdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==