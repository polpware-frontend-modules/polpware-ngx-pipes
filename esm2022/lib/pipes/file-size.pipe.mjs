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
    /** @nocollapse */ static { this.ɵfac = function FileSizePipe_Factory(t) { return new (t || FileSizePipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "fileSize", type: FileSizePipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileSizePipe, [{
        type: Pipe,
        args: [{ name: 'fileSize' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcGlwZXMvc3JjL2xpYi9waXBlcy9maWxlLXNpemUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFcEQ7Ozs7Ozs7O0VBUUU7QUFFRixNQUFNLE9BQU8sWUFBWTtJQUR6QjtRQUdZLFVBQUssR0FBRztZQUNaLE9BQU87WUFDUCxJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtTQUNQLENBQUM7S0FnQkw7SUFkRyxTQUFTLENBQUMsUUFBZ0IsQ0FBQyxFQUFFLFlBQW9CLENBQUM7UUFDOUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN2RCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFFYixPQUFPLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNuQixLQUFLLElBQUksSUFBSSxDQUFDO1lBQ2QsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUUsU0FBUyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztnR0F4QlEsWUFBWTtpSEFBWixZQUFZOztpRkFBWixZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKlxyXG4gKiBDb252ZXJ0IGJ5dGVzIGludG8gbGFyZ2VzdCBwb3NzaWJsZSB1bml0LlxyXG4gKiBUYWtlcyBhbiBwcmVjaXNpb24gYXJndW1lbnQgdGhhdCBkZWZhdWx0cyB0byAyLlxyXG4gKiBVc2FnZTpcclxuICogICBieXRlcyB8IGZpbGVTaXplOnByZWNpc2lvblxyXG4gKiBFeGFtcGxlOlxyXG4gKiAgIHt7IDEwMjQgfCAgZmlsZVNpemV9fVxyXG4gKiAgIGZvcm1hdHMgdG86IDEgS0JcclxuKi9cclxuQFBpcGUoeyBuYW1lOiAnZmlsZVNpemUnIH0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2l6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBwcml2YXRlIHVuaXRzID0gW1xyXG4gICAgICAgICdieXRlcycsXHJcbiAgICAgICAgJ0tCJyxcclxuICAgICAgICAnTUInLFxyXG4gICAgICAgICdHQicsXHJcbiAgICAgICAgJ1RCJyxcclxuICAgICAgICAnUEInXHJcbiAgICBdO1xyXG5cclxuICAgIHRyYW5zZm9ybShieXRlczogbnVtYmVyID0gMCwgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChTdHJpbmcoYnl0ZXMpKSkgfHwgIWlzRmluaXRlKGJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJz8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHVuaXQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoYnl0ZXMgPj0gMTAyNCkge1xyXG4gICAgICAgICAgICBieXRlcyAvPSAxMDI0O1xyXG4gICAgICAgICAgICB1bml0Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnl0ZXMudG9GaXhlZCgrIHByZWNpc2lvbikgKyAnICcgKyB0aGlzLnVuaXRzW3VuaXRdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==