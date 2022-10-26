import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TrimEndPipe {
    transform(value, maxLen, appendEllipsis = true) {
        if (!value) {
            return '';
        }
        if (value.length <= maxLen) {
            return value;
        }
        return value.substring(0, maxLen - 1) + (appendEllipsis ? '...' : '');
    }
}
/** @nocollapse */ TrimEndPipe.ɵfac = function TrimEndPipe_Factory(t) { return new (t || TrimEndPipe)(); };
/** @nocollapse */ TrimEndPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "trimEnd", type: TrimEndPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrimEndPipe, [{
        type: Pipe,
        args: [{
                name: 'trimEnd'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbS1lbmQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1waXBlcy9zcmMvbGliL3BpcGVzL3RyaW0tZW5kLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxXQUFXO0lBRXBCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLGlCQUEwQixJQUFJO1FBQ25FLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O3lGQVZRLFdBQVc7MEdBQVgsV0FBVzt1RkFBWCxXQUFXO2NBSHZCLElBQUk7ZUFBQztnQkFDRixJQUFJLEVBQUUsU0FBUzthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICd0cmltRW5kJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmltRW5kUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIG1heExlbjogbnVtYmVyLCBhcHBlbmRFbGxpcHNpczogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDAsIG1heExlbiAtIDEpICsgKGFwcGVuZEVsbGlwc2lzID8gJy4uLicgOiAnJyk7XG4gICAgfVxuXG59XG4iXX0=