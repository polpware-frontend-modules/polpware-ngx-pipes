import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/*
 * Transform a string into an array of segments.
 * Usage:
 *   path | segments
 * Example:
 *   {{ '\test\tt' |  segments:'\\' }}
 *   formats to: ['test', 'tt']
*/
export class SegmentsPipe {
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
}
/** @nocollapse */ SegmentsPipe.ɵfac = function SegmentsPipe_Factory(t) { return new (t || SegmentsPipe)(); };
/** @nocollapse */ SegmentsPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "segments", type: SegmentsPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SegmentsPipe, [{
        type: Pipe,
        args: [{ name: 'segments' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvc2VnbWVudHMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFcEQ7Ozs7Ozs7RUFPRTtBQUVGLE1BQU0sT0FBTyxZQUFZO0lBRXJCLFNBQVMsQ0FBQyxJQUFZLEVBQUUsWUFBb0IsSUFBSTtRQUM1QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDdEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMzQixPQUFPO2dCQUNILEtBQUssRUFBRSxDQUFDO2dCQUNSLEVBQUUsRUFBRSxLQUFLO2dCQUNULE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQzthQUNsQixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7OzJGQXBCUSxZQUFZO2tGQUFaLFlBQVk7a0RBQVosWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLypcclxuICogVHJhbnNmb3JtIGEgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygc2VnbWVudHMuIFxyXG4gKiBVc2FnZTpcclxuICogICBwYXRoIHwgc2VnbWVudHNcclxuICogRXhhbXBsZTpcclxuICogICB7eyAnXFx0ZXN0XFx0dCcgfCAgc2VnbWVudHM6J1xcXFwnIH19XHJcbiAqICAgZm9ybWF0cyB0bzogWyd0ZXN0JywgJ3R0J11cclxuKi9cclxuQFBpcGUoeyBuYW1lOiAnc2VnbWVudHMnIH0pXHJcbmV4cG9ydCBjbGFzcyBTZWdtZW50c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB0cmFuc2Zvcm0ocGF0aDogc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9ICdcXFxcJyk6IEFycmF5PHsgdmFsdWU6IHN0cmluZywgaWQ6IG51bWJlciwgbGFzdElkOiBudW1iZXIgfT4ge1xyXG4gICAgICAgIGlmICghcGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3MgPSBwYXRoLnNwbGl0KHNlcGFyYXRvcik7XHJcbiAgICAgICAgc3MgPSBzcy5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApO1xyXG5cclxuICAgICAgICBjb25zdCBsZW4gPSBzcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgcHAgPSBzcy5tYXAoKHksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogeSxcclxuICAgICAgICAgICAgICAgIGlkOiBpbmRleCxcclxuICAgICAgICAgICAgICAgIGxhc3RJZDogbGVuIC0gMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcHA7XHJcbiAgICB9XHJcbn1cclxuIl19