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
/** @nocollapse */ UnrollArrayPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "unrollArray", type: UnrollArrayPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UnrollArrayPipe, [{
        type: Pipe,
        args: [{ name: 'unrollArray' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5yb2xsLWFycmF5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXBpcGVzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3Vucm9sbC1hcnJheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQWFwRCxNQUFNLE9BQU8sZUFBZTtJQUV4QixTQUFTLENBQUMsS0FBaUI7UUFDdkIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNuQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNkO1FBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNiLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7UUFFRCxPQUFPO1lBQ0gsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFDTixDQUFDOztpR0F6QlEsZUFBZTt3RkFBZixlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmludGVyZmFjZSBJUGFpciB7XHJcbiAgICBmaXJzdDogYW55O1xyXG4gICAgc2Vjb25kOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJVW5yb2xsUmVzdWx0IHtcclxuICAgIHBhaXJzOiBBcnJheTxJUGFpcj47XHJcbiAgICBsYXN0OiBhbnk7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Vucm9sbEFycmF5JyB9KVxyXG5leHBvcnQgY2xhc3MgVW5yb2xsQXJyYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBBcnJheTxhbnk+KTogSVVucm9sbFJlc3VsdCB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gdmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmZsb29yKGxlbiAvIDIpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYWxmOyBpKyspIHtcclxuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IHZhbHVlW2luZGV4XSxcclxuICAgICAgICAgICAgICAgIHNlY29uZDogdmFsdWVbaW5kZXggKyAxXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW5kZXggKz0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4IDwgbGVuKSB7XHJcbiAgICAgICAgICAgIGxhc3QgPSB2YWx1ZVtpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYWlyczogZ3JvdXBzLFxyXG4gICAgICAgICAgICBsYXN0OiBsYXN0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=