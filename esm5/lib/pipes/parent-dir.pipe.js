/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var ParentDirPipe = /** @class */ (function () {
    function ParentDirPipe() {
    }
    // Remove the last part of a path.
    // Remove the last part of a path.
    /**
     * @param {?} value
     * @return {?}
     */
    ParentDirPipe.prototype.transform = 
    // Remove the last part of a path.
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return '';
        }
        /** @type {?} */
        var index = value.lastIndexOf('\\');
        if (index === -1) {
            return '';
        }
        else {
            return value.substring(0, index);
        }
    };
    ParentDirPipe.decorators = [
        { type: Pipe, args: [{ name: 'parentDir' },] }
    ];
    return ParentDirPipe;
}());
export { ParentDirPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWRpci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1waXBlcy8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9wYXJlbnQtZGlyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFpQkEsQ0FBQztJQWRHLGtDQUFrQzs7Ozs7O0lBQ2xDLGlDQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQWE7UUFFbkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU8sRUFBRSxDQUFDO1NBQ2I7O1lBRUssS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7O2dCQWhCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztJQWlCM0Isb0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncGFyZW50RGlyJyB9KVxyXG5leHBvcnQgY2xhc3MgUGFyZW50RGlyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBwYXJ0IG9mIGEgcGF0aC5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHZhbHVlLmxhc3RJbmRleE9mKCdcXFxcJyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==