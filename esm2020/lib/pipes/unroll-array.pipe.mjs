import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class UnrollArrayPipe {
    transform(value) {
        const len = value.length;
        const half = Math.floor(len / 2);
        let index = 0;
        const groups = [];
        for (let i = 0; i < half; i++) {
            groups.push({
                first: value[index],
                second: value[index + 1]
            });
            index += 2;
        }
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
/** @nocollapse */ UnrollArrayPipe.ɵfac = function UnrollArrayPipe_Factory(t) { return new (t || UnrollArrayPipe)(); };
/** @nocollapse */ UnrollArrayPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "unrollArray", type: UnrollArrayPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnrollArrayPipe, [{
        type: Pipe,
        args: [{ name: 'unrollArray' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5yb2xsLWFycmF5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcGlwZXMvc3JjL2xpYi9waXBlcy91bnJvbGwtYXJyYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFhcEQsTUFBTSxPQUFPLGVBQWU7SUFFeEIsU0FBUyxDQUFDLEtBQWlCO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDbkIsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQzNCLENBQUMsQ0FBQztZQUNILEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDtRQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDYixJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQsT0FBTztZQUNILEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO0lBQ04sQ0FBQzs7aUdBekJRLGVBQWU7a0hBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbnRlcmZhY2UgSVBhaXIge1xyXG4gICAgZmlyc3Q6IGFueTtcclxuICAgIHNlY29uZDogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVVucm9sbFJlc3VsdCB7XHJcbiAgICBwYWlyczogQXJyYXk8SVBhaXI+O1xyXG4gICAgbGFzdDogYW55O1xyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd1bnJvbGxBcnJheScgfSlcclxuZXhwb3J0IGNsYXNzIFVucm9sbEFycmF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogQXJyYXk8YW55Pik6IElVbnJvbGxSZXN1bHQge1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IHZhbHVlLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBoYWxmID0gTWF0aC5mbG9vcihsZW4gLyAyKTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFsZjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpcnN0OiB2YWx1ZVtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICBzZWNvbmQ6IHZhbHVlW2luZGV4ICsgMV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGluZGV4ICs9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGFzdCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA8IGxlbikge1xyXG4gICAgICAgICAgICBsYXN0ID0gdmFsdWVbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFpcnM6IGdyb3VwcyxcclxuICAgICAgICAgICAgbGFzdDogbGFzdFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19