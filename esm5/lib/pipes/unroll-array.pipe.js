/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * @record
 */
function IPair() { }
if (false) {
    /** @type {?} */
    IPair.prototype.first;
    /** @type {?} */
    IPair.prototype.second;
}
/**
 * @record
 */
function IUnrollResult() { }
if (false) {
    /** @type {?} */
    IUnrollResult.prototype.pairs;
    /** @type {?} */
    IUnrollResult.prototype.last;
}
var UnrollArrayPipe = /** @class */ (function () {
    function UnrollArrayPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    UnrollArrayPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var len = value.length;
        /** @type {?} */
        var half = Math.floor(len / 2);
        /** @type {?} */
        var index = 0;
        /** @type {?} */
        var groups = [];
        for (var i = 0; i < half; i++) {
            groups.push({
                first: value[index],
                second: value[index + 1]
            });
            index += 2;
        }
        /** @type {?} */
        var last = null;
        if (index < len) {
            last = value[index];
        }
        return {
            pairs: groups,
            last: last
        };
    };
    UnrollArrayPipe.decorators = [
        { type: Pipe, args: [{ name: 'unrollArray' },] }
    ];
    return UnrollArrayPipe;
}());
export { UnrollArrayPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5yb2xsLWFycmF5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXBpcGVzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3Vucm9sbC1hcnJheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7OztBQUVwRCxvQkFHQzs7O0lBRkcsc0JBQVc7O0lBQ1gsdUJBQVk7Ozs7O0FBR2hCLDRCQUdDOzs7SUFGRyw4QkFBb0I7O0lBQ3BCLDZCQUFVOztBQUdkO0lBQUE7SUEyQkEsQ0FBQzs7Ozs7SUF4QkcsbUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWlCOztZQUNqQixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07O1lBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7O1lBQzVCLEtBQUssR0FBRyxDQUFDOztZQUNQLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQzNCLENBQUMsQ0FBQztZQUNILEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDs7WUFFRyxJQUFJLEdBQUcsSUFBSTtRQUVmLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNiLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7UUFFRCxPQUFPO1lBQ0gsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFDTixDQUFDOztnQkExQkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTs7SUEyQjdCLHNCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmludGVyZmFjZSBJUGFpciB7XHJcbiAgICBmaXJzdDogYW55O1xyXG4gICAgc2Vjb25kOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJVW5yb2xsUmVzdWx0IHtcclxuICAgIHBhaXJzOiBBcnJheTxJUGFpcj47XHJcbiAgICBsYXN0OiBhbnk7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Vucm9sbEFycmF5JyB9KVxyXG5leHBvcnQgY2xhc3MgVW5yb2xsQXJyYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBBcnJheTxhbnk+KTogSVVucm9sbFJlc3VsdCB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gdmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmZsb29yKGxlbiAvIDIpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYWxmOyBpKyspIHtcclxuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IHZhbHVlW2luZGV4XSxcclxuICAgICAgICAgICAgICAgIHNlY29uZDogdmFsdWVbaW5kZXggKyAxXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW5kZXggKz0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4IDwgbGVuKSB7XHJcbiAgICAgICAgICAgIGxhc3QgPSB2YWx1ZVtpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYWlyczogZ3JvdXBzLFxyXG4gICAgICAgICAgICBsYXN0OiBsYXN0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=