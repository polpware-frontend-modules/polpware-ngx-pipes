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
    /** @nocollapse */ static { this.ɵfac = function UnrollArrayPipe_Factory(t) { return new (t || UnrollArrayPipe)(); }; }
    /** @nocollapse */ static { this.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "unrollArray", type: UnrollArrayPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnrollArrayPipe, [{
        type: Pipe,
        args: [{ name: 'unrollArray' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5yb2xsLWFycmF5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcGlwZXMvc3JjL2xpYi9waXBlcy91bnJvbGwtYXJyYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFhcEQsTUFBTSxPQUFPLGVBQWU7SUFFeEIsU0FBUyxDQUFDLEtBQWlCO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNuQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNmLENBQUM7UUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDZCxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxPQUFPO1lBQ0gsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFDTixDQUFDO21HQXpCUSxlQUFlO29IQUFmLGVBQWU7O2lGQUFmLGVBQWU7Y0FEM0IsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmludGVyZmFjZSBJUGFpciB7XHJcbiAgICBmaXJzdDogYW55O1xyXG4gICAgc2Vjb25kOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJVW5yb2xsUmVzdWx0IHtcclxuICAgIHBhaXJzOiBBcnJheTxJUGFpcj47XHJcbiAgICBsYXN0OiBhbnk7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Vucm9sbEFycmF5JyB9KVxyXG5leHBvcnQgY2xhc3MgVW5yb2xsQXJyYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBBcnJheTxhbnk+KTogSVVucm9sbFJlc3VsdCB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gdmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmZsb29yKGxlbiAvIDIpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYWxmOyBpKyspIHtcclxuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IHZhbHVlW2luZGV4XSxcclxuICAgICAgICAgICAgICAgIHNlY29uZDogdmFsdWVbaW5kZXggKyAxXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW5kZXggKz0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4IDwgbGVuKSB7XHJcbiAgICAgICAgICAgIGxhc3QgPSB2YWx1ZVtpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYWlyczogZ3JvdXBzLFxyXG4gICAgICAgICAgICBsYXN0OiBsYXN0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=