import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ShortenFullpathPipe {
    shortJustName(value, left, right) {
        if (value.length <= left + right) {
            return value;
        }
        const index = value.lastIndexOf('.');
        if (index === -1) {
            // no extension
            return value.substring(0, left) + '...' + value.substring(value.length - right);
        }
        // has extension
        const ext = value.substring(index);
        if (ext.length >= left + right) {
            return '...' + ext;
        }
        return value.substring(0, left + right - ext.length) + '...' + ext;
    }
    transform(value, maxlen) {
        if (value.length <= maxlen) {
            return value;
        }
        const leftLen = Math.trunc(maxlen / 2);
        const rightLen = maxlen - leftLen;
        const index = value.lastIndexOf('\\');
        if (index === -1) {
            return this.shortJustName(value, leftLen, rightLen);
        }
        else {
            const r = this.shortJustName(value.substring(index + 1), leftLen, rightLen);
            return '...\\' + r;
        }
    }
}
/** @nocollapse */ ShortenFullpathPipe.ɵfac = function ShortenFullpathPipe_Factory(t) { return new (t || ShortenFullpathPipe)(); };
/** @nocollapse */ ShortenFullpathPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "shortenFullpath", type: ShortenFullpathPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ShortenFullpathPipe, [{
        type: Pipe,
        args: [{ name: 'shortenFullpath' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhdGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZnVsbHBhdGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLG1CQUFtQjtJQUVwQixhQUFhLENBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxLQUFhO1FBRTVELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLGVBQWU7WUFDZixPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDbkY7UUFFRCxnQkFBZ0I7UUFDaEIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRTtZQUM1QixPQUFPLEtBQUssR0FBRyxHQUFHLENBQUM7U0FDdEI7UUFFRCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDdkUsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNuQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUVsQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNILE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sT0FBTyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7O3lHQXRDUSxtQkFBbUI7Z0dBQW5CLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBRC9CLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Nob3J0ZW5GdWxscGF0aCcgfSlcclxuZXhwb3J0IGNsYXNzIFNob3J0ZW5GdWxscGF0aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBwcml2YXRlIHNob3J0SnVzdE5hbWUodmFsdWU6IHN0cmluZywgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBsZWZ0ICsgcmlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignLicpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gbm8gZXh0ZW5zaW9uXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbGVmdCkgKyAnLi4uJyArIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5sZW5ndGggLSByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoYXMgZXh0ZW5zaW9uXHJcbiAgICAgICAgY29uc3QgZXh0ID0gdmFsdWUuc3Vic3RyaW5nKGluZGV4KTtcclxuICAgICAgICBpZiAoZXh0Lmxlbmd0aCA+PSBsZWZ0ICsgcmlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcuLi4nICsgZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBsZWZ0ICsgcmlnaHQgLSBleHQubGVuZ3RoKSArICcuLi4nICsgZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBtYXhsZW46IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhsZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGVmdExlbiA9IE1hdGgudHJ1bmMobWF4bGVuIC8gMik7XHJcbiAgICAgICAgY29uc3QgcmlnaHRMZW4gPSBtYXhsZW4gLSBsZWZ0TGVuO1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlLmxhc3RJbmRleE9mKCdcXFxcJyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG9ydEp1c3ROYW1lKHZhbHVlLCBsZWZ0TGVuLCByaWdodExlbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuc2hvcnRKdXN0TmFtZSh2YWx1ZS5zdWJzdHJpbmcoaW5kZXggKyAxKSwgbGVmdExlbiwgcmlnaHRMZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gJy4uLlxcXFwnICsgcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19