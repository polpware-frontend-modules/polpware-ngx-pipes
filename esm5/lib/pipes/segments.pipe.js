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
var SegmentsPipe = /** @class */ (function () {
    function SegmentsPipe() {
    }
    SegmentsPipe.prototype.transform = function (path, separator) {
        if (separator === void 0) { separator = '\\'; }
        if (!path) {
            return [];
        }
        var ss = path.split(separator);
        ss = ss.filter(function (x) { return x.length > 0; });
        var len = ss.length;
        var pp = ss.map(function (y, index) {
            return {
                value: y,
                id: index,
                lastId: len - 1
            };
        });
        return pp;
    };
    /** @nocollapse */ SegmentsPipe.ɵfac = function SegmentsPipe_Factory(t) { return new (t || SegmentsPipe)(); };
    /** @nocollapse */ SegmentsPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "segments", type: SegmentsPipe, pure: true });
    return SegmentsPipe;
}());
export { SegmentsPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SegmentsPipe, [{
        type: Pipe,
        args: [{ name: 'segments' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvc2VnbWVudHMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFcEQ7Ozs7Ozs7RUFPRTtBQUNGO0lBQUE7S0FzQkM7SUFuQkcsZ0NBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxTQUF3QjtRQUF4QiwwQkFBQSxFQUFBLGdCQUF3QjtRQUM1QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBWixDQUFZLENBQUMsQ0FBQztRQUVsQyxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3RCLElBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSztZQUN2QixPQUFPO2dCQUNILEtBQUssRUFBRSxDQUFDO2dCQUNSLEVBQUUsRUFBRSxLQUFLO2dCQUNULE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQzthQUNsQixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7K0ZBcEJRLFlBQVk7c0ZBQVosWUFBWTt1QkFYekI7Q0FnQ0MsQUF0QkQsSUFzQkM7U0FyQlksWUFBWTtrREFBWixZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKlxyXG4gKiBUcmFuc2Zvcm0gYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzZWdtZW50cy4gXHJcbiAqIFVzYWdlOlxyXG4gKiAgIHBhdGggfCBzZWdtZW50c1xyXG4gKiBFeGFtcGxlOlxyXG4gKiAgIHt7ICdcXHRlc3RcXHR0JyB8ICBzZWdtZW50czonXFxcXCcgfX1cclxuICogICBmb3JtYXRzIHRvOiBbJ3Rlc3QnLCAndHQnXVxyXG4qL1xyXG5AUGlwZSh7IG5hbWU6ICdzZWdtZW50cycgfSlcclxuZXhwb3J0IGNsYXNzIFNlZ21lbnRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybShwYXRoOiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gJ1xcXFwnKTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCBpZDogbnVtYmVyLCBsYXN0SWQ6IG51bWJlciB9PiB7XHJcbiAgICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzcyA9IHBhdGguc3BsaXQoc2VwYXJhdG9yKTtcclxuICAgICAgICBzcyA9IHNzLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlbiA9IHNzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBwcCA9IHNzLm1hcCgoeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB5LFxyXG4gICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgbGFzdElkOiBsZW4gLSAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcDtcclxuICAgIH1cclxufVxyXG4iXX0=