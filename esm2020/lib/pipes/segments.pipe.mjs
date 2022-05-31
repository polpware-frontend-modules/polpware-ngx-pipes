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
/** @nocollapse */ SegmentsPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "segments", type: SegmentsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SegmentsPipe, [{
        type: Pipe,
        args: [{ name: 'segments' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL3BpcGVzL3NlZ21lbnRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBEOzs7Ozs7O0VBT0U7QUFFRixNQUFNLE9BQU8sWUFBWTtJQUVyQixTQUFTLENBQUMsSUFBWSxFQUFFLFlBQW9CLElBQUk7UUFDNUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVsQyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3RCLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDM0IsT0FBTztnQkFDSCxLQUFLLEVBQUUsQ0FBQztnQkFDUixFQUFFLEVBQUUsS0FBSztnQkFDVCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDbEIsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzsyRkFwQlEsWUFBWTs0R0FBWixZQUFZO3VGQUFaLFlBQVk7Y0FEeEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qXHJcbiAqIFRyYW5zZm9ybSBhIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHNlZ21lbnRzLiBcclxuICogVXNhZ2U6XHJcbiAqICAgcGF0aCB8IHNlZ21lbnRzXHJcbiAqIEV4YW1wbGU6XHJcbiAqICAge3sgJ1xcdGVzdFxcdHQnIHwgIHNlZ21lbnRzOidcXFxcJyB9fVxyXG4gKiAgIGZvcm1hdHMgdG86IFsndGVzdCcsICd0dCddXHJcbiovXHJcbkBQaXBlKHsgbmFtZTogJ3NlZ21lbnRzJyB9KVxyXG5leHBvcnQgY2xhc3MgU2VnbWVudHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHBhdGg6IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcgPSAnXFxcXCcpOiBBcnJheTx7IHZhbHVlOiBzdHJpbmcsIGlkOiBudW1iZXIsIGxhc3RJZDogbnVtYmVyIH0+IHtcclxuICAgICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNzID0gcGF0aC5zcGxpdChzZXBhcmF0b3IpO1xyXG4gICAgICAgIHNzID0gc3MuZmlsdGVyKHggPT4geC5sZW5ndGggPiAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGVuID0gc3MubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHBwID0gc3MubWFwKCh5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHksXHJcbiAgICAgICAgICAgICAgICBpZDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBsYXN0SWQ6IGxlbiAtIDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==