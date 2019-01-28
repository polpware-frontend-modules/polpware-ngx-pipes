/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class ShortenFullpathPipe {
    /**
     * @private
     * @param {?} value
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    shortJustName(value, left, right) {
        if (value.length <= left + right) {
            return value;
        }
        /** @type {?} */
        const index = value.lastIndexOf('.');
        if (index === -1) {
            // no extension
            return value.substring(0, left) + '...' + value.substring(value.length - right);
        }
        // has extension
        /** @type {?} */
        const ext = value.substring(index);
        if (ext.length >= left + right) {
            return '...' + ext;
        }
        return value.substring(0, left + right - ext.length) + '...' + ext;
    }
    /**
     * @param {?} value
     * @param {?} maxlen
     * @return {?}
     */
    transform(value, maxlen) {
        if (value.length <= maxlen) {
            return value;
        }
        /** @type {?} */
        const leftLen = Math.trunc(maxlen / 2);
        /** @type {?} */
        const rightLen = maxlen - leftLen;
        /** @type {?} */
        const index = value.lastIndexOf('\\');
        if (index === -1) {
            return this.shortJustName(value, leftLen, rightLen);
        }
        else {
            /** @type {?} */
            const r = this.shortJustName(value.substring(index + 1), leftLen, rightLen);
            return '...\\' + r;
        }
    }
}
ShortenFullpathPipe.decorators = [
    { type: Pipe, args: [{ name: 'shortenFullpath' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhdGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZnVsbHBhdGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7Ozs7SUFFcEIsYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUU1RCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNoQjs7Y0FFSyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxlQUFlO1lBQ2YsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ25GOzs7Y0FHSyxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUU7WUFDNUIsT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNuQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCOztjQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O2NBQ2hDLFFBQVEsR0FBRyxNQUFNLEdBQUcsT0FBTzs7Y0FFM0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdkQ7YUFBTTs7a0JBQ0csQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUMzRSxPQUFPLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7WUF2Q0osSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnc2hvcnRlbkZ1bGxwYXRoJyB9KVxyXG5leHBvcnQgY2xhc3MgU2hvcnRlbkZ1bGxwYXRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHByaXZhdGUgc2hvcnRKdXN0TmFtZSh2YWx1ZTogc3RyaW5nLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IGxlZnQgKyByaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlLmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBubyBleHRlbnNpb25cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBsZWZ0KSArICcuLi4nICsgdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmxlbmd0aCAtIHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhhcyBleHRlbnNpb25cclxuICAgICAgICBjb25zdCBleHQgPSB2YWx1ZS5zdWJzdHJpbmcoaW5kZXgpO1xyXG4gICAgICAgIGlmIChleHQubGVuZ3RoID49IGxlZnQgKyByaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJy4uLicgKyBleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIGxlZnQgKyByaWdodCAtIGV4dC5sZW5ndGgpICsgJy4uLicgKyBleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIG1heGxlbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IG1heGxlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsZWZ0TGVuID0gTWF0aC50cnVuYyhtYXhsZW4gLyAyKTtcclxuICAgICAgICBjb25zdCByaWdodExlbiA9IG1heGxlbiAtIGxlZnRMZW47XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUubGFzdEluZGV4T2YoJ1xcXFwnKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3J0SnVzdE5hbWUodmFsdWUsIGxlZnRMZW4sIHJpZ2h0TGVuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5zaG9ydEp1c3ROYW1lKHZhbHVlLnN1YnN0cmluZyhpbmRleCArIDEpLCBsZWZ0TGVuLCByaWdodExlbik7XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4uXFxcXCcgKyByO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=