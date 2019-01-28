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
export class UnrollArrayPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        /** @type {?} */
        const len = value.length;
        /** @type {?} */
        const half = Math.floor(len / 2);
        /** @type {?} */
        let index = 0;
        /** @type {?} */
        const groups = [];
        for (let i = 0; i < half; i++) {
            groups.push({
                first: value[index],
                second: value[index + 1]
            });
            index += 2;
        }
        /** @type {?} */
        let last = null;
        if (index < len) {
            last = value[index];
        }
        return {
            pairs: groups,
            last: last
        };
    }
}
UnrollArrayPipe.decorators = [
    { type: Pipe, args: [{ name: 'unrollArray' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5yb2xsLWFycmF5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXBpcGVzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3Vucm9sbC1hcnJheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7OztBQUVwRCxvQkFHQzs7O0lBRkcsc0JBQVc7O0lBQ1gsdUJBQVk7Ozs7O0FBR2hCLDRCQUdDOzs7SUFGRyw4QkFBb0I7O0lBQ3BCLDZCQUFVOztBQUlkLE1BQU0sT0FBTyxlQUFlOzs7OztJQUV4QixTQUFTLENBQUMsS0FBaUI7O2NBQ2pCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTTs7Y0FDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzs7WUFDNUIsS0FBSyxHQUFHLENBQUM7O2NBQ1AsTUFBTSxHQUFHLEVBQUU7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNuQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNkOztZQUVHLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2IsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUVELE9BQU87WUFDSCxLQUFLLEVBQUUsTUFBTTtZQUNiLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQztJQUNOLENBQUM7OztZQTFCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW50ZXJmYWNlIElQYWlyIHtcclxuICAgIGZpcnN0OiBhbnk7XHJcbiAgICBzZWNvbmQ6IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElVbnJvbGxSZXN1bHQge1xyXG4gICAgcGFpcnM6IEFycmF5PElQYWlyPjtcclxuICAgIGxhc3Q6IGFueTtcclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAndW5yb2xsQXJyYXknIH0pXHJcbmV4cG9ydCBjbGFzcyBVbnJvbGxBcnJheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IEFycmF5PGFueT4pOiBJVW5yb2xsUmVzdWx0IHtcclxuICAgICAgICBjb25zdCBsZW4gPSB2YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFsZiA9IE1hdGguZmxvb3IobGVuIC8gMik7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBjb25zdCBncm91cHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbGY7IGkrKykge1xyXG4gICAgICAgICAgICBncm91cHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaXJzdDogdmFsdWVbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kOiB2YWx1ZVtpbmRleCArIDFdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpbmRleCArPSAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxhc3QgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPCBsZW4pIHtcclxuICAgICAgICAgICAgbGFzdCA9IHZhbHVlW2luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhaXJzOiBncm91cHMsXHJcbiAgICAgICAgICAgIGxhc3Q6IGxhc3RcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==