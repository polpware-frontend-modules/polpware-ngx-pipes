/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var UnzipObjectPipe = /** @class */ (function () {
    function UnzipObjectPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    UnzipObjectPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    };
    UnzipObjectPipe.decorators = [
        { type: Pipe, args: [{ name: 'unzipObject' },] }
    ];
    return UnzipObjectPipe;
}());
export { UnzipObjectPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW56aXAtb2JqZWN0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXBpcGVzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3VuemlwLW9iamVjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBV0EsQ0FBQzs7Ozs7O0lBVEcsbUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhO1FBQUUsY0FBaUI7YUFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1lBQWpCLDZCQUFpQjs7O1lBQ2hDLElBQUksR0FBRyxFQUFFO1FBQ2YsS0FBSyxJQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDckIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Z0JBVkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTs7SUFXN0Isc0JBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndW56aXBPYmplY3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBVbnppcE9iamVjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogT2JqZWN0LCAuLi5hcmdzOiBzdHJpbmdbXSk6IGFueVtdIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaCh7IGtleToga2V5LCB2YWx1ZTogdmFsdWVba2V5XSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5cztcclxuICAgIH1cclxufVxyXG4iXX0=