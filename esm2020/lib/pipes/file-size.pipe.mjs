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
/** @nocollapse */ FileSizePipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "fileSize", type: FileSizePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileSizePipe, [{
        type: Pipe,
        args: [{ name: 'fileSize' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcGlwZXMvc3JjL2xpYi9waXBlcy9maWxlLXNpemUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFcEQ7Ozs7Ozs7O0VBUUU7QUFFRixNQUFNLE9BQU8sWUFBWTtJQUR6QjtRQUdZLFVBQUssR0FBRztZQUNaLE9BQU87WUFDUCxJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtTQUNQLENBQUM7S0FnQkw7SUFkRyxTQUFTLENBQUMsUUFBZ0IsQ0FBQyxFQUFFLFlBQW9CLENBQUM7UUFDOUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEQsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUVELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUViLE9BQU8sS0FBSyxJQUFJLElBQUksRUFBRTtZQUNsQixLQUFLLElBQUksSUFBSSxDQUFDO1lBQ2QsSUFBSSxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7OzJGQXhCUSxZQUFZOzRHQUFaLFlBQVk7dUZBQVosWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLypcclxuICogQ29udmVydCBieXRlcyBpbnRvIGxhcmdlc3QgcG9zc2libGUgdW5pdC5cclxuICogVGFrZXMgYW4gcHJlY2lzaW9uIGFyZ3VtZW50IHRoYXQgZGVmYXVsdHMgdG8gMi5cclxuICogVXNhZ2U6XHJcbiAqICAgYnl0ZXMgfCBmaWxlU2l6ZTpwcmVjaXNpb25cclxuICogRXhhbXBsZTpcclxuICogICB7eyAxMDI0IHwgIGZpbGVTaXplfX1cclxuICogICBmb3JtYXRzIHRvOiAxIEtCXHJcbiovXHJcbkBQaXBlKHsgbmFtZTogJ2ZpbGVTaXplJyB9KVxyXG5leHBvcnQgY2xhc3MgRmlsZVNpemVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgcHJpdmF0ZSB1bml0cyA9IFtcclxuICAgICAgICAnYnl0ZXMnLFxyXG4gICAgICAgICdLQicsXHJcbiAgICAgICAgJ01CJyxcclxuICAgICAgICAnR0InLFxyXG4gICAgICAgICdUQicsXHJcbiAgICAgICAgJ1BCJ1xyXG4gICAgXTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oYnl0ZXM6IG51bWJlciA9IDAsIHByZWNpc2lvbjogbnVtYmVyID0gMik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHBhcnNlRmxvYXQoU3RyaW5nKGJ5dGVzKSkpIHx8ICFpc0Zpbml0ZShieXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuICc/JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB1bml0ID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGJ5dGVzID49IDEwMjQpIHtcclxuICAgICAgICAgICAgYnl0ZXMgLz0gMTAyNDtcclxuICAgICAgICAgICAgdW5pdCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJ5dGVzLnRvRml4ZWQoKyBwcmVjaXNpb24pICsgJyAnICsgdGhpcy51bml0c1t1bml0XTtcclxuICAgIH1cclxufVxyXG4iXX0=