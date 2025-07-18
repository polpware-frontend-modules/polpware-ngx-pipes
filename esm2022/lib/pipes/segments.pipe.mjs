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
    /** @nocollapse */ static { this.ɵfac = function SegmentsPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SegmentsPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "segments", type: SegmentsPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SegmentsPipe, [{
        type: Pipe,
        args: [{ name: 'segments' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL3BpcGVzL3NlZ21lbnRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBEOzs7Ozs7O0VBT0U7QUFFRixNQUFNLE9BQU8sWUFBWTtJQUVyQixTQUFTLENBQUMsSUFBWSxFQUFFLFlBQW9CLElBQUk7UUFDNUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBRUQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbEMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUN0QixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzNCLE9BQU87Z0JBQ0gsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsRUFBRSxFQUFFLEtBQUs7Z0JBQ1QsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQ2xCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztnSUFwQlEsWUFBWTtpSEFBWixZQUFZOztpRkFBWixZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKlxyXG4gKiBUcmFuc2Zvcm0gYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzZWdtZW50cy4gXHJcbiAqIFVzYWdlOlxyXG4gKiAgIHBhdGggfCBzZWdtZW50c1xyXG4gKiBFeGFtcGxlOlxyXG4gKiAgIHt7ICdcXHRlc3RcXHR0JyB8ICBzZWdtZW50czonXFxcXCcgfX1cclxuICogICBmb3JtYXRzIHRvOiBbJ3Rlc3QnLCAndHQnXVxyXG4qL1xyXG5AUGlwZSh7IG5hbWU6ICdzZWdtZW50cycgfSlcclxuZXhwb3J0IGNsYXNzIFNlZ21lbnRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybShwYXRoOiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gJ1xcXFwnKTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCBpZDogbnVtYmVyLCBsYXN0SWQ6IG51bWJlciB9PiB7XHJcbiAgICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzcyA9IHBhdGguc3BsaXQoc2VwYXJhdG9yKTtcclxuICAgICAgICBzcyA9IHNzLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlbiA9IHNzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBwcCA9IHNzLm1hcCgoeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB5LFxyXG4gICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgbGFzdElkOiBsZW4gLSAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcDtcclxuICAgIH1cclxufVxyXG4iXX0=