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
/** @nocollapse */ FileSizePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "fileSize", type: FileSizePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FileSizePipe, [{
        type: Pipe,
        args: [{ name: 'fileSize' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXBpcGVzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ZpbGUtc2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRDs7Ozs7Ozs7RUFRRTtBQUVGLE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBR1ksVUFBSyxHQUFHO1lBQ1osT0FBTztZQUNQLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1NBQ1AsQ0FBQztLQWdCTDtJQWRHLFNBQVMsQ0FBQyxRQUFnQixDQUFDLEVBQUUsWUFBb0IsQ0FBQztRQUM5QyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0RCxPQUFPLEdBQUcsQ0FBQztTQUNkO1FBRUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRWIsT0FBTyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2xCLEtBQUssSUFBSSxJQUFJLENBQUM7WUFDZCxJQUFJLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUUsU0FBUyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7MkZBeEJRLFlBQVk7a0ZBQVosWUFBWTtrREFBWixZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKlxyXG4gKiBDb252ZXJ0IGJ5dGVzIGludG8gbGFyZ2VzdCBwb3NzaWJsZSB1bml0LlxyXG4gKiBUYWtlcyBhbiBwcmVjaXNpb24gYXJndW1lbnQgdGhhdCBkZWZhdWx0cyB0byAyLlxyXG4gKiBVc2FnZTpcclxuICogICBieXRlcyB8IGZpbGVTaXplOnByZWNpc2lvblxyXG4gKiBFeGFtcGxlOlxyXG4gKiAgIHt7IDEwMjQgfCAgZmlsZVNpemV9fVxyXG4gKiAgIGZvcm1hdHMgdG86IDEgS0JcclxuKi9cclxuQFBpcGUoeyBuYW1lOiAnZmlsZVNpemUnIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2l6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBwcml2YXRlIHVuaXRzID0gW1xyXG4gICAgICAgICdieXRlcycsXHJcbiAgICAgICAgJ0tCJyxcclxuICAgICAgICAnTUInLFxyXG4gICAgICAgICdHQicsXHJcbiAgICAgICAgJ1RCJyxcclxuICAgICAgICAnUEInXHJcbiAgICBdO1xyXG5cclxuICAgIHRyYW5zZm9ybShieXRlczogbnVtYmVyID0gMCwgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChTdHJpbmcoYnl0ZXMpKSkgfHwgIWlzRmluaXRlKGJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJz8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHVuaXQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoYnl0ZXMgPj0gMTAyNCkge1xyXG4gICAgICAgICAgICBieXRlcyAvPSAxMDI0O1xyXG4gICAgICAgICAgICB1bml0Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnl0ZXMudG9GaXhlZCgrIHByZWNpc2lvbikgKyAnICcgKyB0aGlzLnVuaXRzW3VuaXRdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==