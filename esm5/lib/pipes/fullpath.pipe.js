/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var ShortenFullpathPipe = /** @class */ (function () {
    function ShortenFullpathPipe() {
    }
    /**
     * @private
     * @param {?} value
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    ShortenFullpathPipe.prototype.shortJustName = /**
     * @private
     * @param {?} value
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (value, left, right) {
        if (value.length <= left + right) {
            return value;
        }
        /** @type {?} */
        var index = value.lastIndexOf('.');
        if (index === -1) {
            // no extension
            return value.substring(0, left) + '...' + value.substring(value.length - right);
        }
        // has extension
        /** @type {?} */
        var ext = value.substring(index);
        if (ext.length >= left + right) {
            return '...' + ext;
        }
        return value.substring(0, left + right - ext.length) + '...' + ext;
    };
    /**
     * @param {?} value
     * @param {?} maxlen
     * @return {?}
     */
    ShortenFullpathPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} maxlen
     * @return {?}
     */
    function (value, maxlen) {
        if (value.length <= maxlen) {
            return value;
        }
        /** @type {?} */
        var leftLen = Math.trunc(maxlen / 2);
        /** @type {?} */
        var rightLen = maxlen - leftLen;
        /** @type {?} */
        var index = value.lastIndexOf('\\');
        if (index === -1) {
            return this.shortJustName(value, leftLen, rightLen);
        }
        else {
            /** @type {?} */
            var r = this.shortJustName(value.substring(index + 1), leftLen, rightLen);
            return '...\\' + r;
        }
    };
    ShortenFullpathPipe.decorators = [
        { type: Pipe, args: [{ name: 'shortenFullpath' },] }
    ];
    return ShortenFullpathPipe;
}());
export { ShortenFullpathPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhdGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcGlwZXMvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZnVsbHBhdGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQXdDQSxDQUFDOzs7Ozs7OztJQXJDVywyQ0FBYTs7Ozs7OztJQUFyQixVQUFzQixLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFFNUQsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDaEI7O1lBRUssS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsZUFBZTtZQUNmLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztTQUNuRjs7O1lBR0ssR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2xDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFO1lBQzVCLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUN0QjtRQUVELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFRCx1Q0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxNQUFjO1FBQ25DLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7O1lBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7WUFDaEMsUUFBUSxHQUFHLE1BQU0sR0FBRyxPQUFPOztZQUUzQixLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDckMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN2RDthQUFNOztnQkFDRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1lBQzNFLE9BQU8sT0FBTyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7O2dCQXZDSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7O0lBd0NqQywwQkFBQztDQUFBLEFBeENELElBd0NDO1NBdkNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Nob3J0ZW5GdWxscGF0aCcgfSlcclxuZXhwb3J0IGNsYXNzIFNob3J0ZW5GdWxscGF0aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBwcml2YXRlIHNob3J0SnVzdE5hbWUodmFsdWU6IHN0cmluZywgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBsZWZ0ICsgcmlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignLicpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gbm8gZXh0ZW5zaW9uXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbGVmdCkgKyAnLi4uJyArIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5sZW5ndGggLSByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoYXMgZXh0ZW5zaW9uXHJcbiAgICAgICAgY29uc3QgZXh0ID0gdmFsdWUuc3Vic3RyaW5nKGluZGV4KTtcclxuICAgICAgICBpZiAoZXh0Lmxlbmd0aCA+PSBsZWZ0ICsgcmlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcuLi4nICsgZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBsZWZ0ICsgcmlnaHQgLSBleHQubGVuZ3RoKSArICcuLi4nICsgZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBtYXhsZW46IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhsZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGVmdExlbiA9IE1hdGgudHJ1bmMobWF4bGVuIC8gMik7XHJcbiAgICAgICAgY29uc3QgcmlnaHRMZW4gPSBtYXhsZW4gLSBsZWZ0TGVuO1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlLmxhc3RJbmRleE9mKCdcXFxcJyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG9ydEp1c3ROYW1lKHZhbHVlLCBsZWZ0TGVuLCByaWdodExlbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuc2hvcnRKdXN0TmFtZSh2YWx1ZS5zdWJzdHJpbmcoaW5kZXggKyAxKSwgbGVmdExlbiwgcmlnaHRMZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gJy4uLlxcXFwnICsgcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19