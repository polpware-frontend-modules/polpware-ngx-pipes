/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/*
 * Transform a string into an array of segments.
 * Usage:
 *   path | segments
 * Example:
 *   {{ '\test\tt' |  segments:'\\' }}
 *   formats to: ['test', 'tt']
*/
export class SegmentsPipe {
    /**
     * @param {?} path
     * @param {?=} separator
     * @return {?}
     */
    transform(path, separator = '\\') {
        if (!path) {
            return [];
        }
        /** @type {?} */
        let ss = path.split(separator);
        ss = ss.filter(x => x.length > 0);
        /** @type {?} */
        const len = ss.length;
        /** @type {?} */
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
SegmentsPipe.decorators = [
    { type: Pipe, args: [{ name: 'segments' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvc2VnbWVudHMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVdwRCxNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBRXJCLFNBQVMsQ0FBQyxJQUFZLEVBQUUsWUFBb0IsSUFBSTtRQUM1QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDYjs7WUFFRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDOUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOztjQUU1QixHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU07O2NBQ2YsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDM0IsT0FBTztnQkFDSCxLQUFLLEVBQUUsQ0FBQztnQkFDUixFQUFFLEVBQUUsS0FBSztnQkFDVCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDbEIsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUVGLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7O1lBckJKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKlxyXG4gKiBUcmFuc2Zvcm0gYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzZWdtZW50cy4gXHJcbiAqIFVzYWdlOlxyXG4gKiAgIHBhdGggfCBzZWdtZW50c1xyXG4gKiBFeGFtcGxlOlxyXG4gKiAgIHt7ICdcXHRlc3RcXHR0JyB8ICBzZWdtZW50czonXFxcXCcgfX1cclxuICogICBmb3JtYXRzIHRvOiBbJ3Rlc3QnLCAndHQnXVxyXG4qL1xyXG5AUGlwZSh7IG5hbWU6ICdzZWdtZW50cycgfSlcclxuZXhwb3J0IGNsYXNzIFNlZ21lbnRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybShwYXRoOiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gJ1xcXFwnKTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCBpZDogbnVtYmVyLCBsYXN0SWQ6IG51bWJlciB9PiB7XHJcbiAgICAgICAgaWYgKCFwYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzcyA9IHBhdGguc3BsaXQoc2VwYXJhdG9yKTtcclxuICAgICAgICBzcyA9IHNzLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlbiA9IHNzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBwcCA9IHNzLm1hcCgoeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB5LFxyXG4gICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgbGFzdElkOiBsZW4gLSAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcDtcclxuICAgIH1cclxufVxyXG4iXX0=